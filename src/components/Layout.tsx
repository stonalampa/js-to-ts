import { ReactNode } from 'react';

import clsx from 'clsx';

export const Layout = (
    { children }: { children: ReactNode },
    background: string
) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
