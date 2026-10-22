const filters = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '진행 중' },
  { value: 'done', label: '완료' },
]

// 목록 위의 필터 버튼 세 개. 지금 고른 필터(value)를 받고, 바꾸면 onChange로 알린다.
function FilterTabs({ value, onChange }) {
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
