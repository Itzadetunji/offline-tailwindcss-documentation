import type { Config, PluginCreator } from './types/config'
type Plugin = {
  withOptions<T>(
    plugin: (options: T) => PluginCreator,
    config?: (options: T) => Config
  ): { handler: PluginCreator; config?: Config }
  (plugin: PluginCreator, config?: Config): { handler: PluginCreator; config?: Config }
}

declare const plugin: Plugin
export = plugin
