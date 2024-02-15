import { InternalTreeItem, TreeItem } from '../models/TreeItem';

interface ConvertToInternalTreeItemReturn {
  items: InternalTreeItem[];
  lookup: Map<string, InternalTreeItem>;
}

export function convertToInternalTreeItem(items: readonly TreeItem[]): ConvertToInternalTreeItemReturn {
  const lookup = new Map<string, InternalTreeItem>();

  function convertToInternalTreeItem(item: TreeItem, depth: number, parent?: InternalTreeItem): InternalTreeItem {
    const internalItem: InternalTreeItem = {
      id: item.id,
      data: item,
      depth,
      parent
    };

    lookup.set(item.id, internalItem);

    if (item.children) {
      internalItem.children = item.children.map((child) => convertToInternalTreeItem(child, depth + 1, internalItem));
    }

    return internalItem;
  }

  const rootItems = items.map((item) => convertToInternalTreeItem(item, 0));
  return {
    items: rootItems,
    lookup
  };
}

export function getVisibleItems(
  items: readonly InternalTreeItem[],
  expandedIds: ReadonlySet<string>
): InternalTreeItem[] {
  const visibleItems: InternalTreeItem[] = [];

  function dfs(item: InternalTreeItem) {
    visibleItems.push(item);
    if (item.children != null && expandedIds.has(item.id)) {
      item.children.forEach(dfs);
    }
  }

  items.forEach(dfs);
  return visibleItems;
}
