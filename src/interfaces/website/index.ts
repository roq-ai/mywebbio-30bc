import { AnalysisInterface } from 'interfaces/analysis';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface WebsiteInterface {
  id?: string;
  url: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  analysis?: AnalysisInterface[];
  organization?: OrganizationInterface;
  _count?: {
    analysis?: number;
  };
}

export interface WebsiteGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  organization_id?: string;
}
