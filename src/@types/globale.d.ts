declare namespace globalLib {
    interface Options {
        [key: string]: any
    }
    interface base {
        version: string
        options: Options
        doSomething(): void
    }
}