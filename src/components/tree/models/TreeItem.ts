export interface TreeItem<T = {}> {
  id: string;
  label: string;
  data: T;
  children?: TreeItem[];

  // Alternatively, you can use parentId to build the tree which is a lot more friendly
  // when the data comes from RDBMS, thus engineers don't need to do the heavy lifting
  // to build the tree structure.
  // parentId?: string;
}

export interface InternalTreeItem<T = {}> {
  id: string;
  data: TreeItem<T>;
  children?: InternalTreeItem<T>[];
  parent?: InternalTreeItem<T>;
  /**
   * The depth of the tree item, starting from 0
   */
  depth: number;
}
