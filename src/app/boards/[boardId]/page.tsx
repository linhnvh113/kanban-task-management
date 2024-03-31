interface Props {
  params: {
    boardId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <div>
      <p>{params.boardId}</p>
    </div>
  );
}
