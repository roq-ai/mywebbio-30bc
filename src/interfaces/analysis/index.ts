import { WebsiteInterface } from 'interfaces/website';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnalysisInterface {
  id?: string;
  results: string;
  status: string;
  website_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  website?: WebsiteInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
  results?: string;
  status?: string;
  website_id?: string;
  user_id?: string;
}
