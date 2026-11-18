# job-hunter — скилл Claude для поиска работы

Claude ведёт поиск работы целиком:

1. **Ты говоришь, кем хочешь работать.** Например: «Senior Go», «тимлид», «архитектор в финтехе». Claude собирает это в 1–3 трека.
2. **Claude переписывает резюме под каждый трек** — на русском и английском. Опыт тот же, акценты и summary разные. Ничего не выдумывает и спрашивает недостающие цифры.
3. **Собирает данные для анкет** один раз: телефон, email, Telegram, LinkedIn, GitHub, формат работы, ожидания.
4. **Подключает Claude in Chrome** — работа идёт в твоём браузере с твоими логинами.
5. **Предлагает площадки** под твой рынок: hh, Habr Career, DOU, LinkedIn, remote-борды, Telegram-каналы. Ты входишь в каждую сам.
6. **Каждый день:** ищет свежие вакансии, фильтрует, выбирает резюме, пишет письма. Показывает список — **откликается только на то, что ты подтвердил**. В конце — отчёт.
7. **Ответы и интервью:** статусы, черновики ответов, документ подготовки к собеседованию.

**Безопасность:**
- пароли, коды и номера документов Claude не спрашивает;
- капчу не обходит;
- файл резюме, согласия и финальную отправку там, где просит площадка, делаешь ты.

## Установка

**Claude (claude.ai / desktop):** Settings → Capabilities → Skills → Upload skill. Загрузи ZIP с папкой `job-hunter/`:

```bash
git clone https://github.com/azhimov/job-hunter-skill
cd job-hunter-skill && zip -r job-hunter.zip job-hunter
```

**Claude Code:** скопируй папку `job-hunter/` в `~/.claude/skills/`.

Для откликов нужно расширение **Claude in Chrome**. Без него Claude найдёт вакансии и подготовит письма, а отправлять придётся вручную.

## Как начать

Напиши Claude: «Хочу найти работу» или «Перепиши моё резюме под Senior Go и тимлида» — и приложи текущее резюме.

Подробная инструкция — [GETTING_STARTED.md](GETTING_STARTED.md).

## Структура

```
job-hunter/
  SKILL.md                     — сценарий: этапы 1–7 и правила
  references/
    resume-guide.md            — как писать резюме под трек
    platforms.md               — площадки и их особенности
    classify.js                — шаблон фильтра вакансий
    report-template.md         — шаблон ежедневного отчёта
  templates/
    profile-template.md        — заготовка профиля
    cover-letter-examples.md   — структура писем RU/EN
```

---

## English

A Claude skill that runs your job search end to end:

- rewrites your resume for the roles you want (1–3 tracks, RU/EN);
- collects application-form details once;
- connects Claude in Chrome and your job boards;
- searches daily, drafts cover letters, and applies **only to the jobs you approve**;
- reports results.

Claude never asks for passwords or bypasses captchas. Install: upload the `job-hunter/` folder as a skill, or copy it to `~/.claude/skills/`.

## License

MIT
