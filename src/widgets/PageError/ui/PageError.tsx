import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button
                onClick={reloadPage}
                theme={ButtonTheme.ERROR}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
