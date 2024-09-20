import ClientComponent from '../../../components/client-components';

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return (
    <div>
      page.. {params.id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
