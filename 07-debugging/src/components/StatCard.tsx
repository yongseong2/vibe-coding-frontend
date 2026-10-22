// 숫자 카드 하나. 이름(label)과 숫자(count)를 받아서 보여준다.
type StatCardProps = {
  label: string
  count: number
}

function StatCard({ label, count }: StatCardProps) {
  return (
    <div className="rounded-xl bg-gray-100 p-4">
      {label} {count}
    </div>
  )
}

export default StatCard
