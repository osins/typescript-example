declare namespace teApi {
    interface Options {
        [key: string]: any
    }
    interface base {
        version: string
        options: Options
        doSomething(): void
    }
}

declare var teBase: teApi.base;
