"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent({ totalPages, currentPage, onPageChange }: PaginationComponentProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="py-[53px]">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink 
              href="#"
              className={currentPage === 1 ? "font-bold" : ""}
              onClick={() => onPageChange(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>

          {totalPages > 1 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              {Array.from({ length: totalPages - 1 }, (_, index) => (
                <PaginationItem key={index + 2}>
                  <PaginationLink
                    href="#"
                    className={currentPage === index + 2 ? "font-bold" : ""}
                    onClick={() => onPageChange(index + 2)}
                  >
                    {index + 2}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
