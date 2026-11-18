// Классификатор вакансий. Шаблон: регулярки собрать из треков и exclusions профиля.
// Запустить один раз в сессии браузера через javascript_tool, потом вызывать
// window.classify(title, description) для каждой карточки.
//
// Порядок треков важен: сначала самые «старшие» или узкие (CTO/архитектор),
// потом тимлид, потом инженер — иначе «Tech Lead» попадёт в инженерный трек.

window.JH = {
  tracks: [
    // ПРИМЕР. Заменить на треки из профиля.
    { id: 'C', title: /\bcto\b|chief technology|architect|архитектор|principal|tech(nical)?\s*lead|техлид/ },
    { id: 'B', title: /team\s*lead|тимлид|engineering manager|head of (engineering|development)|руководитель (разработки|отдела разработки)/ },
    { id: 'A', title: /(senior|lead|staff|ведущий|старший).*(backend|golang|\bgo\b|software engineer)|(backend|golang|\bgo\b).*(senior|lead)/,
      needStack: /golang|\bgo\b/ },
  ],
  tooJunior: /junior|intern|trainee|стажер|стажёр|младший/,
  middleOnly: /middle|мидл/,
  seniorWords: /senior|lead|сеньор|ведущий|старший|staff|principal/,
  exclude: /(^|[^а-яa-z0-9])1[сc]([^а-яa-z0-9]|$)|битрикс|bitrix|wordpress/,          // из profile.exclusions
  geoBlock: /удал[её]нно по (росси|рф)|на территории (рф|росси)|только (в рф|в россии|граждан)|резидент\S* рф|ukraine only/, // зависит от work.countries
};

window.classify = (title, desc) => {
  const t = (title || '').toLowerCase();
  const full = (t + ' ' + (desc || '')).toLowerCase().replace(/\s+/g, ' ');
  const c = window.JH;

  const track = c.tracks.find(tr => tr.title.test(t));
  if (!track) return { pass: false, reason: 'не наш трек' };

  if (c.tooJunior.test(t)) return { pass: false, reason: 'уровень' };
  if (c.middleOnly.test(t) && !c.seniorWords.test(t)) return { pass: false, reason: 'уровень' };
  if (track.needStack && !track.needStack.test(full)) return { pass: false, reason: 'не тот стек' };
  if (c.exclude.test(full)) return { pass: false, reason: 'исключение' };
  if (c.geoBlock.test(full)) return { pass: false, reason: 'гео-ограничение' };

  return { pass: true, track: track.id };
};
