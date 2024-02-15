import { CardList } from '../../common/card/CardList';
import { HasClassName } from '../../common/types';

export const LoadingGallery: React.FC<HasClassName> = (props) => {
  return (
    <CardList<{}>
      listLayoutClassName={props.className}
      itemKey={() => ''}
      renderItem={() => <div />}
      isLoading={true}
      items={[]}
    />
  );
};
