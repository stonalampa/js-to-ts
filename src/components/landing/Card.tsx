import clsx from 'clsx';

export const Card = ({
    title,
    text,
    link,
}: {
    title: string;
    text: string;
    link: string;
}) => (
    <div
        className={
            clsx(
                'flex',
                'flex-col',
                'gap-4',
                'p-4',
                'bg-white',
                'py-6',
                'px-4',
                'rounded-2xl'
            ) as string
        }
    >
        <h2
            className={
                clsx(
                    'text-black',
                    'text-2xl',
                    'leading-normal',
                    'font-medium'
                ) as string
            }
        >
            {title}
        </h2>
        <p
            className={
                clsx('text-gray80', 'text-base', 'leading-relaxed') as string
            }
        >
            {text}
        </p>
        <a
            href={link}
            className={
                clsx(
                    'mt-auto',
                    'flex',
                    'items-center',
                    'text-primary',
                    'gap-2.5'
                ) as string
            }
        >
            Read more
            <img src="/media/landing/arrow-purple.svg" alt="" />
        </a>
    </div>
);
