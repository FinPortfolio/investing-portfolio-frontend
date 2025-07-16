type ProtectedRoutes = {
    PORTFOLIO: string
    PROFILE: string
    TRANSACTIONS: string
    TRANSACTION: (id: string) => string
    SETUP: string
    QUOTES: string
    ACCOUNTS: string
    ACCOUNT: (name: string) => string
}

type PublicRoutes = {
    HOME: string
    TARIFFS: string
    CONTACTS: string
    DEMO: string
}

export const PROTECTED_PAGE: ProtectedRoutes = {
    PORTFOLIO: '/portfolio',
    PROFILE: '/portfolio/profile',
    TRANSACTIONS: '/portfolio/transactions',
    TRANSACTION: (id: string) => `/portfolio/transactions/${id}`, // если будут спецсимволы, то заменить на `/portfolio/transactions/${encodeURIComponent(id)}`
    SETUP: '/portfolio/setup',
    QUOTES: '/portfolio/quotes',
    ACCOUNTS: '/portfolio/accounts',
    ACCOUNT: (name: string) => `/portfolio/accounts/${name}`, // если будут спецсимволы, то заменить на `/portfolio/accounts/${encodeURIComponent(name)}`,
}

export const PUBLIC_PAGE: PublicRoutes = {
    HOME: '/',
    TARIFFS: '/tariffs',
    CONTACTS: '/contacts',
    DEMO: '/portfolio', // это временное решение до создания авторизации
}
