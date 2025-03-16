type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, add: string[] = []): string {
    return [
        cls,
        ...add.filter(Boolean),
        ...Object.entries(mods)
            /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}
