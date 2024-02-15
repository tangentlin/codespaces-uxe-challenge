import { useCallback, useEffect, useMemo, useState } from 'react';
import { InternalTreeItem, TreeItem } from './models/TreeItem';
import { convertToInternalTreeItem, getVisibleItems } from './utils/treeUtil';

interface UseTreeReturn {
  visibleItems: readonly InternalTreeItem[];
  expandedIds: ReadonlySet<string>;
  selected: InternalTreeItem | null;
  expand: (id: string) => void;
  collapse: (id: string) => void;
  toggle: (id: string) => void;
  select: (id: string) => void;
}

export function useTree(
  initialItems: readonly TreeItem[],
  initialSelectedId?: string,
  initialExpandedIds: Set<string> = new Set()
): UseTreeReturn {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(initialExpandedIds || new Set());
  const [visibleItems, setVisibleItems] = useState<InternalTreeItem[]>([]);
  const [internalItems, setInternalItems] = useState<InternalTreeItem[]>([]);
  const [selected, setSelected] = useState<InternalTreeItem | null>(null);
  const [itemLookup, setItemLookup] = useState<Map<string, InternalTreeItem>>(new Map());

  useEffect(() => {
    const { items, lookup } = convertToInternalTreeItem(initialItems);
    setInternalItems(items);
    setItemLookup(lookup);
  }, [initialItems]);

  useEffect(() => {
    let selectedItem = null;
    if (initialSelectedId != null) {
      selectedItem = itemLookup.get(initialSelectedId) || null;
    }
    setSelected(selectedItem);
  }, [itemLookup, initialSelectedId]);

  useEffect(() => {
    setVisibleItems(getVisibleItems(internalItems, expandedIds));
  }, [expandedIds, internalItems]);

  const expand = useCallback(
    (id: string) => {
      if (expandedIds.has(id)) {
        return;
      }
      const newExpandedIds = new Set(expandedIds);
      newExpandedIds.add(id);
      setExpandedIds(newExpandedIds);
    },
    [expandedIds]
  );

  const collapse = useCallback(
    (id: string) => {
      if (!expandedIds.has(id)) {
        return;
      }
      const newExpandedIds = new Set(expandedIds);
      newExpandedIds.delete(id);
      setExpandedIds(newExpandedIds);
    },
    [expandedIds]
  );

  const toggle = useCallback(
    (id: string) => {
      if (expandedIds.has(id)) {
        collapse(id);
      } else {
        expand(id);
      }
    },
    [collapse, expand, expandedIds]
  );

  const select = useCallback(
    (id: string) => {
      const item = itemLookup.get(id);
      if (item) {
        setSelected(item);
      }
    },
    [itemLookup]
  );

  const result = useMemo(() => {
    return {
      visibleItems,
      expandedIds,
      selected,
      expand,
      collapse,
      toggle,
      select
    };
  }, [visibleItems, expandedIds, selected, expand, collapse, toggle]);

  return result;
}
