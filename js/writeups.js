document.addEventListener('DOMContentLoaded', () => {
  const searchEl = document.getElementById('search-writeups')
  const filterButtons = document.querySelectorAll('.filter-tags button')
  const cards = document.querySelectorAll('.writeup-card')

  // 搜索功能
  searchEl.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase()
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase()
      const excerpt = card.querySelector('.excerpt').textContent.toLowerCase()
      card.style.display = (title.includes(term) || excerpt.includes(term)) ? 'block' : 'none'
    })
  })

  // 分类筛选
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter
      filterButtons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      
      cards.forEach(card => {
        const categories = card.dataset.categories
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
})