// TableComponent.tsx
import React from "react";
import {
  TableOptions,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as S from "./styles";

type Props<T extends Record<string, unknown>> = {
  columns: TableOptions<T>["columns"];
  data: T[];
};

export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
}: Props<T>) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <S.Table>
      <S.TableHead>
        {getHeaderGroups().map((headerGroups) => (
          <S.TableRow key={headerGroups.id}>
            {headerGroups.headers.map((header) => (
              <S.TableHeader key={header.id}>
                {header.isPlaceholder ? null : (
                  <>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </>
                )}
              </S.TableHeader>
            ))}
          </S.TableRow>
        ))}
      </S.TableHead>
      <S.TableBody>
        {getRowModel().rows.map((row) => (
          <S.TableRow key={row.id} role="row">
            {row.getVisibleCells().map((cell) => (
              <S.TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </S.TableCell>
            ))}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
};
