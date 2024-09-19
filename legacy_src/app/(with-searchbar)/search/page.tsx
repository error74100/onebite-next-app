import ClientComponent from '@/components/client-components';

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <div>
      search page.. {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
