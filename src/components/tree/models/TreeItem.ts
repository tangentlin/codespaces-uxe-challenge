export interface TreeItem {
  id: string;
  label: string;
  children?: TreeItem[];

  // Alternatively, you can use parentId to build the tree which is a lot more friendly
  // when the data comes from RDBMS, thus engineers don't need to do the heavy lifting
  // to build the tree structure.
  // parentId?: string;
}

export interface InternalTreeItem<DataT = TreeItem> {
  id: string;
  data: DataT;
  children?: InternalTreeItem[];
  parent?: InternalTreeItem<DataT>;
  /**
   * The depth of the tree item, starting from 0
   */
  depth: number;
}
