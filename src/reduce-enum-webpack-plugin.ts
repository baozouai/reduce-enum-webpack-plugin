import type { Compilation, Compiler } from 'webpack'

class ReduceEnumWebpackPlugin {
  // 每个plugin实例必须有apply方法，接收compiler实例
  apply(compiler: Compiler) {
    // compilation => 此次打包的上下文
    compiler.hooks.emit.tap(ReduceEnumWebpackPlugin.name, (compilation: Compilation) => {
      // 遍历资源文息，其中assetName为每个资源的名称，value为文件内容
      for (const assetName in compilation.assets) {
        if (assetName.endsWith('.js')) {
          // 每个资源的值
          const content = compilation.assets[assetName].source() as string
          const newContent = content
            .replace(/(?<!\'\s*)(\w)\[(\1\.(\w+)=(-?\d+|\d+e\d))\]="\3"(?!\s*\')/g, '$2')
            .replace(/(?<!\'\s*)(\w)\[(\1\[("(\w*)")?\]=(-?\d+|\d+e\d))\]=\3(?!\s*\')/g, (_, __, $2: string) => {
              return $2.replace(/\["(.*?)"\]/, (_, $1: string) => `.${$1}`)
            })
          // 覆盖原始对象
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          compilation.assets[assetName] = {
            source: () => newContent,
            size: () => newContent.length,
          } as any
        }
      }
    })
  }
}

export default ReduceEnumWebpackPlugin
