import {
  ArrowLeftToLine,
  ArrowRightToLine,
  CircleArrowLeft,
  CircleArrowRight,
} from 'lucide-react';
import { memo, FC, MouseEvent } from 'react';
import styles from './Paginagtion.module.css';

interface PaginationProps {
  page?: number;
  limit?: number;
  count?: number;
  indent?: number;
  onChange?: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  page = 1,
  limit = 12,
  count = 108,
  indent = 1,
  onChange,
}) => {
  // Количество страниц
  const length = Math.ceil(count / Math.max(limit, 1));

  // Номера слева и справа относительно активного номера, которые остаются видимыми
  let left = Math.max(page - indent, 1);
  const right = Math.min(left + indent * 2, length);
  // Корректировка когда страница в конце
  left = Math.max(right - indent * 2, 1);

  // Массив номеров, чтобы удобней рендерить
  const items: (number | null)[] = [];
  // Первая страница всегда нужна
  if (left > 1) items.push(1);
  // Пропуск
  if (left > 2) items.push(null);
  // Последовательность страниц
  for (let p = left; p <= right; p++) items.push(p);
  // Пропуск
  if (right < length - 1) items.push(null);
  // Последняя страница
  if (right < length) items.push(length);

  const onClickHandler = (number: number | null) => (e: MouseEvent) => {
    if (onChange && number !== null) {
      e.preventDefault();
      onChange(number);
    }
  };
  return (
    <ul className="flex gap-[23px] mt-[53px] mb-[124px] font-harmonia text-[#0E9EFF]">
      {page !== 0 && (
        <li
          className="flex gap-[5px] items-center justify-center hover:cursor-pointer"
          onClick={onClickHandler(page - 1)}
        >
          <ArrowLeftToLine className="h-[14px] w-[16px] hidden md:block" />
          <span className="hidden md:block">Предыдующая страница</span>
          <CircleArrowLeft className="block md:hidden" />
        </li>
      )}
      {items.map((number, index) => (
        <li
          key={index}
          className={
            number !== null && number - 1 === page ? styles.activeItem : ''
          }
          onClick={onClickHandler(number && number - 1)}
        >
          <span className={number !== null ? 'hover:cursor-pointer' : ''}>
            {number ? number : '...'}
          </span>
        </li>
      ))}
      {page !== length - 1 && (
        <li
          className="flex gap-[5px] items-center justify-center hover:cursor-pointer"
          onClick={onClickHandler(page + 1)}
        >
          <span className="hidden md:block">Следующая страница</span>
          <ArrowRightToLine className="h-[14px] w-[16px] hidden md:block" />
          <CircleArrowRight className="block md:hidden" />
        </li>
      )}
    </ul>
  );
};

export default memo(Pagination);
