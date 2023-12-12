import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.grey[300]};
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.grey[100]};
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
`;
