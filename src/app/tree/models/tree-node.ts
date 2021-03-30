export interface TreeNode {
  [key: string]: any;
  label?: string;
  value?: any;
  children?: TreeNode[];
}
