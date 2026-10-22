// 목록 위에서 고를 수 있는 필터: 전체(all), 진행 중(active), 완료(done)
export type Filter = 'all' | 'active' | 'done'

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '진행 중' },
  { value: 'done', label: '완료' },
]

type FilterTabsProps = {
  value: Filter
  onChange: (value: Filter) => void
}

// 목록 위의 필터 버튼 세 개. 지금 고른 필터(value)를 받고, 바꾸면 onChange로 알린다.
function FilterTabs({ value, onChange }: FilterTabsProps) {
  return (
    <div className="mt-6 flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          aria-pressed={value === filter.value}
          className={`rounded-card px-3 py-1.5 text-sm ${
            value === filter.value ? 'bg-primary text-on-primary' : 'bg-surface text-muted'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
