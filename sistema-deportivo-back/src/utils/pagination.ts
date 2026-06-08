import { Request } from 'express';

export interface PaginationResult {
  limit: number;
  offset: number;
  page: number;
}

export const getPagination = (req: Request): PaginationResult => {
  const page = Math.max(1, parseInt(req.query.page as string) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 20));
  const offset = (page - 1) * limit;
  return { limit, offset, page };
};
