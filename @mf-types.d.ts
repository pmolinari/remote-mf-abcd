
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/RemoteRouter' | 'REMOTE_ALIAS_IDENTIFIER/PageD';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/PageD' ? typeof import('REMOTE_ALIAS_IDENTIFIER/PageD') :T extends 'REMOTE_ALIAS_IDENTIFIER/RemoteRouter' ? typeof import('REMOTE_ALIAS_IDENTIFIER/RemoteRouter') :any;