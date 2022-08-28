# MultiChat

## Requirenments

- node ^16
- docker-compose

## Getting started

```bash
git clone multi-chat
cd multi-chat
npm i
```

### Start frontend

```
npm run start
```

### Start backend

```
docker-compose up --build
npm run start:backend
```

### ROADMAP

- <input type="checkbox" /> Профиль, редактирование профиля
- <input type="checkbox" /> Возможность добавлять/удалять контактов и начинать чат 1-1
- <input type="checkbox" /> Чат должен работать на всех разрешениях
- <input type="checkbox" /> Возможность создавать папки с чатами
- <input type="checkbox" /> Возможность закрепить чат в самом верху
- <input type="checkbox" /> Передача голосовых/аудио/видео/документов
- <input type="checkbox" /> Emojipicker и реакции на сообщения
- <input type="checkbox" /> Настройки, смена тем + кастомные темы
- <input type="checkbox" /> Добавление в black-list

#### Чем он отличается от Telegram?

- Ничем, это его копия
