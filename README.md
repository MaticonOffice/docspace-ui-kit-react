# @docspace/ui-kit - UI Kit Maticon Office DocSpace

[RU](README.md) | [EN](README.en.md)

> Библиотека React-компонентов интерфейса, выделенная из исходного кода [клиента Maticon Office DocSpace](https://github.com/MaticonOffice/DocSpace-client).

[![React](https://img.shields.io/badge/react-%3E%3D19.0.0-blue)](https://react.dev)

## О библиотеке

`@docspace/ui-kit` предоставляет React-компоненты и цветовую систему из монорепозитория [DocSpace-client](https://github.com/MaticonOffice/DocSpace-client), каталог `libs/ui-kit`.

<p align="center">
  <a href="https://github.com/MaticonOffice/DocSpace">
    <img width="800" src="https://static-blog.maticonoffice.ru/wp-content/uploads/2025/05/12164704/DocSpace-API-roadmap.png" alt="Maticon Office DocSpace">
  </a>
</p>

> **Примечание:** библиотека находится на ранней стадии разработки, версия `v0.0.1`. До стабильного выпуска API может изменяться.

## Возможности

- **TypeScript в основе** - полные определения типов входят в пакет.
- **Цветовая система** - встроенная палитра `globalColors` с именованными токенами для светлых и тёмных состояний интерфейса.
- **Интерактивная документация** - каждый компонент описан в историях [Storybook](https://storybook.js.org/) с интерактивными параметрами.
- **Tree shaking** - пакет содержит сборки ESM и CJS, поэтому можно импортировать только используемый код.
- **Тесты** - компоненты тестируются с помощью [Vitest](https://vitest.dev/) и [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- **Современные инструменты** - сборка Rollup, проверка и форматирование через [Biome](https://biomejs.dev/).

## Требования

- React 19.0.0 или новее;
- React DOM 19.0.0 или новее.

## Установка

```bash
# pnpm
pnpm add @docspace/ui-kit

# npm
npm install @docspace/ui-kit

# yarn
yarn add @docspace/ui-kit
```

**Peer-зависимости:** `react` и `react-dom` версии 19.0.0 или новее.

## Быстрый старт

### Использование компонента

```tsx
import { Text } from "@docspace/ui-kit";

function App() {
  return (
    <Text fontSize="14px" isBold>
      Привет, мир!
    </Text>
  );
}
```

### Использование цветовой палитры

```tsx
import { globalColors } from "@docspace/ui-kit/themes/globalColors";

const primaryBlue = globalColors.lightBlueMain;
const errorRed = globalColors.mainRed;
```

## Использование

### Импорт из основной точки входа

```js
import {
  Aside,
  AsideHeader,
  Avatar,
  Backdrop,
  Badge,
  Button,
  Calendar,
  Checkbox,
  CircleSkeleton,
  ComboBox,
  ContextMenu,
  ContextMenuButton,
  DatePicker,
  DateTimePicker,
  DropDown,
  DropDownItem,
  EmailInput,
  EmptyScreenContainer,
  EmptyView,
  FieldContainer,
  FileInput,
  FilterInput,
  Heading,
  HelpButton,
  IconButton,
  InputBlock,
  Label,
  Link,
  Loader,
  LoaderWrapper,
  LoadingButton,
  MCPIcon,
  ModalDialog,
  Portal,
  ProgressBar,
  PublicRoomBar,
  RadioButton,
  RadioButtonGroup,
  RectangleSkeleton,
  RoomIcon,
  RoomLogo,
  Row,
  RowContainer,
  RowContent,
  Scrollbar,
  SearchInput,
  SelectedItem,
  SelectionArea,
  Selector,
  Slider,
  SnackBar,
  StatusMessage,
  TabItem,
  Tabs,
  Tag,
  Tags,
  Text,
  TextInput,
  Textarea,
  ThemeProvider,
  TimePicker,
  Toast,
  toastr,
  ToggleButton,
  Tooltip,
  TopLoaderService,
  BaseTile,
  FileTile,
  FolderTile,
  RoomTile,
  TemplateTile,
  TileContainer,
  TileContent,
} from "@docspace/ui-kit";
```

### Импорт отдельных компонентов

```js
import { AccessRightSelect } from "@docspace/ui-kit/components/access-right-select";
import { Aside, AsideHeader } from "@docspace/ui-kit/components/aside";
import { Avatar } from "@docspace/ui-kit/components/avatar";
import { Backdrop } from "@docspace/ui-kit/components/backdrop";
import { Badge } from "@docspace/ui-kit/components/badge";
import { Button, ButtonSize } from "@docspace/ui-kit/components/button";
import { Calendar } from "@docspace/ui-kit/components/calendar";
import { CategoryItem } from "@docspace/ui-kit/components/category-item";
import { Checkbox } from "@docspace/ui-kit/components/checkbox";
import { CircleSkeleton } from "@docspace/ui-kit/components/circle";
import { ColorInput } from "@docspace/ui-kit/components/color-input";
import { ColorPicker } from "@docspace/ui-kit/components/color-picker";
import { ComboBox } from "@docspace/ui-kit/components/combobox";
import { ContextMenu } from "@docspace/ui-kit/components/context-menu";
import { ContextMenuButton, ContextMenuButtonDisplayType } from "@docspace/ui-kit/components/context-menu-button";
import { DatePicker } from "@docspace/ui-kit/components/date-picker";
import { DateTimePicker } from "@docspace/ui-kit/components/date-time-picker";
import { DragAndDrop } from "@docspace/ui-kit/components/drag-and-drop";
import { DropDown } from "@docspace/ui-kit/components/drop-down";
import { DropDownItem } from "@docspace/ui-kit/components/drop-down-item";
import { Dropzone } from "@docspace/ui-kit/components/dropzone";
import { EmailInput } from "@docspace/ui-kit/components/email-input";
import { EmptyScreenContainer } from "@docspace/ui-kit/components/empty-screen-container";
import { EmptyView } from "@docspace/ui-kit/components/empty-view";
import { ErrorContainer } from "@docspace/ui-kit/components/error-container";
import { FieldContainer } from "@docspace/ui-kit/components/field-container";
import { FileInput } from "@docspace/ui-kit/components/file-input";
import { FilterInput } from "@docspace/ui-kit/components/filter";
import { FloatingButton, FloatingButtonIcons } from "@docspace/ui-kit/components/floating-button";
import { FormWrapper } from "@docspace/ui-kit/components/form-wrapper";
import { Heading, HeadingLevel, HeadingSize } from "@docspace/ui-kit/components/heading";
import { HelpButton } from "@docspace/ui-kit/components/help-button";
import { IconButton } from "@docspace/ui-kit/components/icon-button";
import { ImageEditor } from "@docspace/ui-kit/components/image-editor";
import { InfiniteLoaderComponent } from "@docspace/ui-kit/components/infinite-loader";
import { InputBlock } from "@docspace/ui-kit/components/input-block";
import { Label } from "@docspace/ui-kit/components/label";
import { Link, LinkType, LinkTarget } from "@docspace/ui-kit/components/link";
import { LinkWithDropdown } from "@docspace/ui-kit/components/link-with-dropdown";
import { Loader, LoaderTypes } from "@docspace/ui-kit/components/loader";
import { LoaderWrapper } from "@docspace/ui-kit/components/loader-wrapper";
import { LoadingButton } from "@docspace/ui-kit/components/loading-button";
import { MainButton } from "@docspace/ui-kit/components/main-button";
import { MainButtonMobile } from "@docspace/ui-kit/components/main-button-mobile";
import { MCPIcon, MCPIconSize } from "@docspace/ui-kit/components/mcp-icon";
import { ModalDialog, ModalDialogType } from "@docspace/ui-kit/components/modal-dialog";
import { Navigation } from "@docspace/ui-kit/components/navigation";
import { OperationsProgressButton } from "@docspace/ui-kit/components/operations-progress-button";
import { Paging } from "@docspace/ui-kit/components/paging";
import { PasswordInput } from "@docspace/ui-kit/components/password-input";
import { Portal } from "@docspace/ui-kit/components/portal";
import { PortalLogo } from "@docspace/ui-kit/components/portal-logo";
import { ProgressBar, PreparationPortalProgress } from "@docspace/ui-kit/components/progress-bar";
import { PublicRoomBar } from "@docspace/ui-kit/components/public-room-bar";
import { RadioButton } from "@docspace/ui-kit/components/radio-button";
import { RadioButtonGroup } from "@docspace/ui-kit/components/radio-button-group";
import { RectangleSkeleton } from "@docspace/ui-kit/components/rectangle";
import { RoomIcon } from "@docspace/ui-kit/components/room-icon";
import { RoomLogo } from "@docspace/ui-kit/components/room-logo";
import { Row, RowContainer, RowContent } from "@docspace/ui-kit/components/rows";
import { Scrollbar } from "@docspace/ui-kit/components/scrollbar";
import { SearchInput } from "@docspace/ui-kit/components/search-input";
import { Section } from "@docspace/ui-kit/components/section";
import { SelectedItem } from "@docspace/ui-kit/components/selected-item";
import { SelectionArea } from "@docspace/ui-kit/components/selection-area";
import { Selector, SelectorAccessRightsMode } from "@docspace/ui-kit/components/selector";
import { Slider } from "@docspace/ui-kit/components/slider";
import { SnackBar } from "@docspace/ui-kit/components/snackbar";
import { StatusMessage } from "@docspace/ui-kit/components/status-message";
import { TabItem } from "@docspace/ui-kit/components/tab-item";
import { TableContainer, TableBody, TableRow, TableHeader, TableGroupMenu, TableCell } from "@docspace/ui-kit/components/table";
import { Tabs, TabsTypes } from "@docspace/ui-kit/components/tabs";
import { Tag } from "@docspace/ui-kit/components/tag";
import { Tags } from "@docspace/ui-kit/components/tags";
import { Text } from "@docspace/ui-kit/components/text";
import { TextInput, InputSize, InputType } from "@docspace/ui-kit/components/text-input";
import { Textarea } from "@docspace/ui-kit/components/textarea";
import { ThemeProvider } from "@docspace/ui-kit/components/theme-provider";
import { TimePicker } from "@docspace/ui-kit/components/time-picker";
import { Toast, toastr } from "@docspace/ui-kit/components/toast";
import { ToggleButton } from "@docspace/ui-kit/components/toggle-button";
import { Tooltip, TooltipContainer, withTooltip } from "@docspace/ui-kit/components/tooltip";
import { TopLoaderService } from "@docspace/ui-kit/components/top-loading-indicator";
import { BaseTile, FileTile, FolderTile, RoomTile, TemplateTile, TileContainer, TileContent } from "@docspace/ui-kit/components/tiles";
```

### Импорт контекстов и хуков

```js
import { ThemeProvider, useTheme } from "@docspace/ui-kit/context/ThemeContext";
import { InterfaceDirectionProvider, useInterfaceDirection } from "@docspace/ui-kit/context/InterfaceDirectionContext";

import { useAnimation } from "@docspace/ui-kit/hooks/useAnimation";
import { useDebounce } from "@docspace/ui-kit/hooks/useDebounce";
import { useEventListener } from "@docspace/ui-kit/hooks/useEventListener";
import { useIsomorphicLayoutEffect } from "@docspace/ui-kit/hooks/useIsomorphicLayoutEffect";
```

### Импорт провайдеров

```js
import { Providers } from "@docspace/ui-kit/providers";
import { ApiProvider, useApi } from "@docspace/ui-kit/providers/api";
import { ErrorBoundary } from "@docspace/ui-kit/providers/error-boundary";
import { TranslationProvider, useI18N } from "@docspace/ui-kit/providers/translation";
import { ThemeProvider } from "@docspace/ui-kit/providers/theme";
import type { TTranslations } from "@docspace/ui-kit/providers/translation";
```

### Импорт страниц ошибок

```js
import { Error401, Error403, Error404, ErrorOfflineContainer, ErrorInvalidLink, ErrorUnavailable, AccessRestricted } from "@docspace/ui-kit/errors";
```

### Импорт служебных средств

```js
import { isMobile, isTablet, isDesktop, checkIsSSR } from "@docspace/ui-kit/utils";
import commonIconsStyles, { IconSizeType, isIconSizeType } from "@docspace/ui-kit/utils/common-icons-style";
import DomHelpers from "@docspace/ui-kit/utils/dom-helpers";
import { useClickOutside } from "@docspace/ui-kit/utils/use-click-outside";
import { getCommonTranslation } from "@docspace/ui-kit/utils/i18n";
import { combineUrl } from "@docspace/ui-kit/utils/combineUrl";
import { getCookie, setCookie, deleteCookie } from "@docspace/ui-kit/utils/cookie";
import { parseAddress, parseAddresses, EmailSettings } from "@docspace/ui-kit/utils/email";
```

### Импорт перечислений, констант и типов

```js
import { ShareAccessRights, EmployeeType, RoomsType, ThemeKeys, FileType, FolderType } from "@docspace/ui-kit/enums";
import { LOADER_STYLE, OPERATIONS_NAME, EMPTY_ARRAY, EMPTY_OBJECT } from "@docspace/ui-kit/constants";
import type { TFile, TFolder, TUser, TFileSecurity, TFolderSecurity, TRoomSecurity } from "@docspace/ui-kit/types";
```

## Компоненты

| Компонент | Описание |
|-----------|----------|
| [AccessRightSelect](./components/access-right-select/README.md) | Выпадающий список для управления правами доступа к ресурсам |
| [AddButton](./components/add-button/README.md) | Кнопка добавления с необязательной подписью, состоянием загрузки и акцентным оформлением |
| AppLoader | Полноэкранный индикатор загрузки при инициализации приложения |
| Article | Адаптивная боковая панель с заголовком, основной кнопкой и секциями навигации |
| [Aside](./components/aside/README.md) | Выдвижная панель для настроек, сведений и форм |
| [AsideHeader](./components/aside/aside-header/README.md) | Заголовок боковой панели с необязательными кнопками назад/закрыть, собственными значками и состоянием загрузки |
| [Avatar](./components/avatar/README.md) | Аватар пользователя или группы: изображение, инициалы, значки и индикаторы ролей |
| [Backdrop](./components/backdrop/README.md) | Настраиваемая подложка модальных окон, диалогов и боковых панелей с поддержкой касаний |
| [Badge](./components/badge/README.md) | Универсальная метка для уведомлений, состояний и интерактивных элементов |
| [Button](./components/button/README.md) | Основные и вторичные кнопки разных размеров, с загрузкой и подсказками |
| [Calendar](./components/calendar/README.md) | Пользовательский календарь для выбора даты |
| CategoryItem | Ссылка навигации с необязательной меткой и стрелкой иерархического меню |
| [Chat](./ai-agent/chat/README.md) | Чат ИИ с потоковыми ответами, историей, вложениями и интеграцией инструментов ИИ |
| [Checkbox](./components/checkbox/README.md) | Настраиваемый флажок с неопределённым состоянием и отображением ошибки |
| [CircleSkeleton](./components/circle/README.md) | Круглый скелетон для аватаров и значков |
| [ColorInput](./components/color-input/README.md) | Текстовое поле ввода и проверки цвета |
| [ColorPicker](./components/color-picker/README.md) | Интерактивный визуальный выбор цвета |
| [ComboBox](./components/combobox/README.md) | Текстовое поле с выпадающим списком, поиском и пользовательским оформлением |
| [ContextMenu](./components/context-menu/README.md) | Контекстное меню с подменю, заголовками, переключателями и горячими клавишами |
| [ContextMenuButton](./components/context-menu-button/README.md) | Кнопка контекстных действий для элементов списка с выпадающим меню |
| [DatePicker](./components/date-picker/README.md) | Поле выбора даты |
| [DateTimePicker](./components/date-time-picker/README.md) | Объединённый выбор даты и времени |
| [DragAndDrop](./components/drag-and-drop/README.md) | Обработчик перетаскивания файлов для загрузки |
| [DropDown](./components/drop-down/README.md) | Выпадающая область для меню, параметров и контекстного содержимого с автоматическим позиционированием |
| [DropDownItem](./components/drop-down-item/README.md) | Элемент выпадающего меню с разделителем, заголовком, подменю и переключателем |
| Dropzone | Интерактивная область приёма файлов с обратной связью и ограничением типов |
| [EmailInput](./components/email-input/README.md) | Поле электронной почты со встроенной проверкой и сообщениями об ошибках |
| [EmptyScreenContainer](./components/empty-screen-container/README.md) | Пустое состояние с изображением, текстом и кнопками действий |
| [EmptyView](./components/empty-view/README.md) | Пустое состояние со значком, заголовком, описанием и интерактивными действиями |
| [ErrorContainer](./components/error-container/README.md) | Полноэкранная ошибка с фоном, сообщением и кнопкой действия |
| [FieldContainer](./components/field-container/README.md) | Обёртка поля формы с едиными отступами и оформлением |
| [FileInput](./components/file-input/README.md) | Поле выбора файла |
| FilterInput | Фильтр с поиском, сортировкой и выбором представления |
| [FloatingButton](./components/floating-button/README.md) | Круглая плавающая кнопка с индикатором выполнения и значком предупреждения |
| FormWrapper | Обёртка элементов формы с единым макетом и оформлением |
| [Heading](./components/heading/README.md) | Заголовок с уровнями и настраиваемыми размерами и типами |
| [HelpButton](./components/help-button/README.md) | Кнопка со значком информации, открывающая справочную подсказку |
| [IconButton](./components/icon-button/README.md) | Кнопка-значок с состояниями наведения, нажатия и блокировки |
| ImageEditor | Обрезка и редактирование изображения с загрузкой и предварительным просмотром |
| InfiniteLoader | Виртуализированный контейнер бесконечной прокрутки с постепенной загрузкой |
| [InputBlock](./components/input-block/README.md) | Текстовое поле с необязательным значком и дочерними элементами |
| [Label](./components/label/README.md) | Подпись поля формы с отметкой обязательности и подсказкой |
| [Link](./components/link/README.md) | Гиперссылка типа страницы или действия |
| [LinkWithDropdown](./components/link-with-dropdown/README.md) | Ссылка, открывающая выпадающее меню дополнительных действий |
| [Loader](./components/loader/README.md) | Индикатор загрузки с несколькими видами анимации |
| [LoaderWrapper](./components/loader-wrapper/README.md) | Обёртка, затемняющая содержимое и блокирующая взаимодействие во время загрузки |
| LoadingButton | Круглая кнопка с анимированным прогрессом и индикатором завершения |
| [MainButton](./components/main-button/README.md) | Основная кнопка действия с необязательным выпадающим меню для настольного интерфейса |
| [MainButtonMobile](./components/main-button-mobile/README.md) | Плавающая кнопка с раскрывающимся меню для мобильного интерфейса |
| [MCPIcon](./components/mcp-icon/README.md) | Значок MCP (Model Context Protocol) с изображением или текстовой заменой |
| [ModalDialog](./components/modal-dialog/README.md) | Диалог в виде модального окна или боковой панели с поддержкой горячих клавиш |
| Navigation | Навигационная цепочка с раскрываемыми иерархическими разделами |
| OperationsProgressButton | Отслеживание нескольких одновременных операций с проверкой ошибок |
| [Paging](./components/paging/README.md) | Элементы перехода между страницами данных |
| [PasswordInput](./components/password-input/README.md) | Поле пароля с оценкой надёжности, генератором и показом/скрытием |
| [Portal](./components/portal/README.md) | Вывод дочерних элементов в другой DOM-узел |
| [PortalLogo](./components/portal-logo/README.md) | Адаптивный логотип с резервным отображением |
| [ProgressBar](./components/progress-bar/README.md) | Полоса выполнения и индикатор подготовки портала |
| [PublicRoomBar](./components/public-room-bar/README.md) | Информационная панель публичной комнаты с заголовком, текстом и кнопкой закрытия |
| [RadioButton](./components/radio-button/README.md) | Переключатель с настраиваемой подписью и оформлением |
| [RadioButtonGroup](./components/radio-button-group/README.md) | Группа переключателей с горизонтальным или вертикальным расположением |
| [RectangleSkeleton](./components/rectangle/README.md) | Прямоугольный скелетон для текста, кнопок и содержимого |
| [RoomIcon](./components/room-icon/README.md) | Значок комнаты с изображением, цветом, метками, редактированием и состояниями |
| [RoomLogo](./components/room-logo/README.md) | Логотип комнаты с типом, архивом, шаблоном и флажком |
| [Row](./components/rows/row/README.md) | Строка списка с флажком, контекстным меню, метками и современным/обычным макетом |
| [RowContainer](./components/rows/row-container/README.md) | Контейнер строк с необязательной виртуализацией `react-window` и бесконечной загрузкой |
| [RowContent](./components/rows/row-content/README.md) | Макет заголовка, значков и боковых секций строки с описаниями для планшетов |
| [Scrollbar](./components/scrollbar/README.md) | Пользовательская полоса прокрутки с автоскрытием, RTL и гибким оформлением |
| [SearchInput](./components/search-input/README.md) | Поиск с автообновлением, очисткой и задержкой ввода |
| [Section](./components/section/README.md) | Макет страницы с заголовком, фильтром, телом, подвалом, информационной панелью и прогрессом операций |
| [SelectedItem](./components/selected-item/README.md) | Выбранный элемент с возможностью удаления |
| [SelectionArea](./components/selection-area/README.md) | Прямоугольная область выделения нескольких элементов мышью |
| [Selector](./components/selector/README.md) | Выпадающий селектор элементов с режимами прав доступа |
| [Slider](./components/slider/README.md) | Ползунок диапазона с заполнением и поддержкой RTL |
| SnackBar | Временное всплывающее уведомление |
| [StatusMessage](./components/status-message/README.md) | Анимированное сообщение об ошибке или предупреждении |
| [TabItem](./components/tab-item/README.md) | Вкладка с активным, множественным и заблокированным состояниями |
| TableContainer | Модульная таблица с телом, строкой, заголовком, групповым меню и ячейкой |
| [Tabs](./components/tabs/README.md) | Основные и вторичные вкладки с закреплением и управлением содержимым |
| [Tag](./components/tag/README.md) | Метка виртуальной комнаты |
| [Tags](./components/tags/README.md) | Контейнер нескольких меток |
| [Text](./components/text/README.md) | Типографический компонент с настраиваемым оформлением |
| [TextInput](./components/text-input/README.md) | Однострочное текстовое поле с поддержкой маски |
| [Textarea](./components/textarea/README.md) | Многострочное поле с форматированием JSON, номерами строк и копированием |
| [ThemeProvider](./components/theme-provider/README.md) | Провайдер темы с интеграцией styled-components |
| [TimePicker](./components/time-picker/README.md) | Поле выбора времени |
| [Toast](./components/toast/README.md) | Уведомления об успехе, ошибке, предупреждении и информации, см. [настройку i18n](#настройка-i18n) |
| [ToggleButton](./components/toggle-button/README.md) | Переключатель с состояниями загрузки и блокировки |
| [Tooltip](./components/tooltip/README.md) | Настраиваемая подсказка с несколькими способами активации |
| TopLoaderService | Верхняя полоса выполнения со статическими методами `start()`, `end()` и `cancel()` |
| [BaseTile](./components/tiles/base-tile/README.md) | Базовая структура всех плиток |
| [FileTile](./components/tiles/file-tile/README.md) | Плитка файла с информацией и миниатюрой |
| [FolderTile](./components/tiles/folder-tile/README.md) | Компактная или большая плитка папки |
| [RoomTile](./components/tiles/room-tile/README.md) | Плитка комнаты с метками и метаданными |
| [TemplateTile](./components/tiles/template-tile/README.md) | Плитка шаблона с владельцем и сведениями о хранилище |
| [TileContainer](./components/tiles/tile-container/README.md) | Контейнер сетки плиток с автоматической категоризацией |
| [TileContent](./components/tiles/tile-content/README.md) | Обёртка содержимого плитки с единым оформлением |

## Контексты

| Контекст | Описание |
|----------|----------|
| [ThemeContext](./context/ThemeContext/README.md) | Управление базовой, тёмной и пользовательской цветовыми темами |
| [InterfaceDirectionContext](./context/InterfaceDirectionContext/README.md) | Управление направлением интерфейса LTR/RTL |

## Хуки

| Хук | Описание |
|-----|----------|
| useAnimation | Управляет фазами анимации none/start/progress/finish, отправляет события окна и возвращает ссылки и `triggerAnimation()` |
| useDebounce | Выполняет функцию с настраиваемой задержкой и очищает таймер при размонтировании |
| useEventListener | Типизированный обработчик событий Window, HTML/SVG, Document и MediaQueryList с автоматической очисткой |
| useIsomorphicLayoutEffect | Эффект для SSR: `useLayoutEffect` в браузере и `useEffect` на сервере |

## Провайдеры

Составные провайдеры оборачивают приложение обработкой ошибок, доступом к API, переводами и темами.

| Провайдер | Описание |
|-----------|----------|
| [Providers](./providers/README.md) | Композиция ErrorBoundary, ApiProvider, TranslationProvider и ThemeProvider |
| [ApiProvider](./providers/api/README.md) | React Context с `profilesApi` и `commonSettingsApi` из `@maticonoffice/docspace-api-sdk` |
| [ErrorBoundary](./providers/error-boundary/README.md) | Классовый компонент, перехватывающий ошибки отрисовки, с собственным резервным интерфейсом и `onError` |
| [TranslationProvider](./providers/translation/README.md) | Обёртка `I18nextProvider` и инициализация i18next ресурсами переводов |
| [ThemeProvider](./providers/theme/README.md) | Выбор темы Base/Dark/System, получение цветовых тем и слежение за системными настройками |

### Быстрый старт

```tsx
import { Providers } from "@docspace/ui-kit/providers";
import enCommon from "@docspace/ui-kit/locales/en/Common.json";
import type { TTranslations } from "@docspace/ui-kit/providers/translation";

const translations: TTranslations = new Map([
  ["en", new Map([["Common", enCommon]])],
]);

<Providers
  url="https://example-maticonoffice.ru"
  apiKey="your-api-key"
  translations={translations}
  locale="en"
>
  <App />
</Providers>
```

Полное руководство по интернационализации приведено в разделе [«Провайдеры и i18n»](#провайдеры-и-i18n).

## Страницы ошибок

Готовые страницы ошибок оборачивают `ErrorContainer` локализованными сообщениями из `getCommonTranslation`.

| Компонент | Ключ перевода | Описание |
|-----------|:-------------:|----------|
| Error401 | `Error401Text` | Ошибка неавторизованного доступа |
| Error403 | `Error403Text` | Ошибка запрещённого доступа |
| Error404 | `Error404Text` | Страница не найдена |
| ErrorOfflineContainer | `ErrorOfflineText` | Нет подключения к сети |
| ErrorInvalidLink | `InvalidLink`, `LinkDoesNotExist` | Недействительная или истёкшая ссылка |
| ErrorUnavailable | `ErrorDeactivatedText` | Портал деактивирован |
| AccessRestricted | `AccessDenied`, `PortalRestriction` | Доступ ограничен |

```js
import { Error401, Error403, Error404 } from "@docspace/ui-kit/errors";
```

## Служебные средства

| Средство | Описание |
|----------|----------|
| [common-icons-style](./utils/common-icons-style/README.md) | CSS-помощник styled-components для единого размера значков с перечислением `IconSizeType` |
| [combineUrl](./utils/combineUrl) | Объединяет базовый URL с сегментами пути и обрабатывает начальные и конечные косые черты |
| [common](./utils/common) | `getUserTypeTranslation` для ролей сотрудников, а также `RoomsTypeValues` и `RoomsTypes` |
| [context](./utils/context) | React-контекст с необязательными `sectionWidth` и `sectionHeight` |
| [cookie](./utils/cookie) | `getCookie`, `setCookie`, `deleteCookie` с отдельной обработкой `asc_language` |
| [date](./utils/date) | Форматирование, арифметика, сравнение, длительность, часовые пояса и разбор дат |
| [device](./utils/device/README.md) | Определение устройств: `isMobile`, `isTablet`, `isDesktop`, `checkIsSSR` |
| [dom-helpers](./utils/dom-helpers/README.md) | Размеры области просмотра, положение элементов, ширина полосы прокрутки и z-index |
| [edge-scrolling](./utils/edge-scrolling) | Автопрокрутка у краёв окна при перетаскивании |
| [email](./utils/email) | Разбор и проверка адресов: `parseAddress`, `parseAddresses`, `EmailSettings`, `isValidDomainName` |
| [get-system-theme](./utils/get-system-theme) | Получает системную тему Dark или Base из AscDesktopEditor или `prefers-color-scheme` |
| [get-text-color](./utils/get-text-color/README.md) | Выбирает чёрный или белый текст для фона по воспринимаемой яркости |
| [getFilesFromEvent](./utils/getFilesFromEvent) | Преобразует события перетаскивания, вставки и ввода в массивы File, включая обход каталогов |
| [getLogoUrl](./utils/getLogoUrl) | Формирует URL логотипа по `WhiteLabelLogoType`, культуре и теме |
| [hasOwnProperty](./utils/hasOwnProperty) | Безопасная проверка `Object.hasOwn`, включая null и undefined |
| [i18n](./utils/i18n) | `getCommonTranslation(key)` получает локализованную строку из `window.i18n` |
| [openingNewTab](./utils/openingNewTab) | Определяет среднюю кнопку, Ctrl+Click и Cmd+Click для открытия в новой вкладке |
| [trim-separator](./utils/trim-separator/README.md) | Удаляет лишние разделители и отключённые элементы контекстного меню |
| [use-click-outside](./utils/use-click-outside/README.md) | React-хук клика вне элемента для меню и диалогов |
| [uuid](./utils/uuid/README.md) | Создание UUID v4 |
| [add-log](./utils/add-log) | Выводит сообщения в консоль или `window.logs` в зависимости от `ClientConfig` |
| [getTitleWithoutExtension](./utils/getTitleWithoutExtension) | Удаляет расширение из имени файла |
| [image-helpers](./utils/image-helpers) | Создаёт Map «расширение файла -> URL SVG» для значков 24, 32, 64 и 96 пикселей |
| [presentInArray](./utils/presentInArray) | Ищет строку в массиве с необязательным игнорированием регистра |
| [socket](./utils/socket) | Одиночка `SocketHelper` для WebSocket, подписок и отправки сообщений с типизированными перечислениями |
| [typeGuards](./utils/typeGuards) | Проверяет, соответствует ли значение объекту Next.js `StaticImageData` с `src`, `height` и `width` |

## Перечисления

Общие перечисления доступны из `@docspace/ui-kit/enums`:

| Перечисление | Значения |
|--------------|----------|
| `ShareAccessRights` | None, FullAccess, ReadOnly, DenyAccess, Varies, Review, Comment, FormFilling, CustomFilter, RoomManager, Editing, Collaborator |
| `EmployeeType` | Owner, Admin, RoomAdmin, User, Guest |
| `RoomsType` | PublicRoom, FormRoom, EditingRoom, VirtualDataRoom, CustomRoom, AIRoom |
| `EmployeeStatus` | Active, Disabled, Pending |
| `FileType` | Unknown, Archive, Video, Audio, Image, Spreadsheet, Presentation, Document и другие |
| `FolderType` | DEFAULT, CommonDocuments, MyDocuments, Favorites, Recent, Trash, Archive, Rooms и другие |
| `ThemeKeys` | BaseStr, DarkStr, SystemStr |

## Константы

Общие константы из `@docspace/ui-kit/constants`:

| Константа | Описание |
|-----------|----------|
| `LOADER_STYLE` | Настройки скелетона: ширина, прозрачность и скорость |
| `OPERATIONS_NAME` | Идентификаторы операций: корзина, загрузка, копирование, перемещение и преобразование |
| `ROOM_ACTION_KEYS` | Ключи действий редактирования комнаты |
| `EMPTY_ARRAY` | Замороженный пустой массив со стабильной ссылкой |
| `EMPTY_OBJECT` | Замороженный пустой объект со стабильной ссылкой |
| `FUNCTION_EMPTY` | Пустая функция |
| `LANGUAGE` | Имя cookie: `"asc_language"` |

## Типы

Основные типы TypeScript из `@docspace/ui-kit/types`:

| Тип | Описание |
|-----|----------|
| `TFile` | Полный объект файла с безопасностью, состоянием и метаданными |
| `TFolder` | Объект папки с безопасностью и правами доступа |
| `TUser` | Пользователь или сотрудник: аватар, состояние, административные признаки и квота |
| `TCreatedBy` | Автор: avatar, displayName, id и profileUrl |
| `TLogo` | Логотип в нескольких размерах |
| `TFileSecurity` | Подробные права доступа к файлу |
| `TFolderSecurity` | Подробные права доступа к папке |
| `TRoomSecurity` | Подробные права доступа к комнате |
| `TViewAs` | Режим представления: `"tile"`, `"table"`, `"row"`, `"settings"`, `"profile"` |

## Селекторы

| Вариант | Тип элемента | Описание |
|---------|--------------|----------|
| **Users Selector** | `TSelectorItemUser` | Выбор участников: аватар, роль, тип сотрудника и членство в группах |
| **Groups Selector** | `TSelectorItemGroup` | Выбор обычных и системных групп |
| **Files Selector** | `TSelectorItemFile` | Выбор файлов со значком типа и расширением |
| **Folders Selector** | `TSelectorItemFolder` | Выбор папок со значком и количеством файлов и подпапок |
| **Rooms Selector** | `TSelectorItemRoom` | Выбор комнат со значком, обложкой, метками и типом |
| **MCP Selector** | `TSelectorItemMCP` | Выбор агентов Model Context Protocol со значком и именем |

## Темы

В библиотеку входит `globalColors` с более чем 100 именованными цветовыми токенами. Палитру можно импортировать напрямую или через точку входа тем:

```tsx
import { globalColors } from "@docspace/ui-kit/themes/globalColors";
// или
import { globalColors } from "@docspace/ui-kit/themes";

// Базовые цвета
const white = globalColors.white; // "#ffffff"
const black = globalColors.black; // "#333333"

const primary = globalColors.lightBlueMain;
const success = globalColors.mainGreen;
const error = globalColors.mainRed;
const warning = globalColors.mainOrange;
```

## Настройка i18n

Несколько компонентов поддерживают автоматическую локализацию через `window.i18n`:

- **Toast** - заголовки уведомлений об успехе, ошибке, предупреждении и информации;
- **DropDownItem** - подписи меток бета-версии и платной функции;
- **Selector** - пустые состояния, кнопки и ошибки;
- **страницы ошибок** - Error401, Error403, Error404 и другие сообщения.

### Настройка

Передайте переводы через `window.i18n`:

```typescript
window.i18n = {
  loaded: {
    "en/Common.json": {
      data: {
        // Заголовки Toast
        Done: "Done",
        Warning: "Warning",
        Alert: "Alert",
        Info: "Info",
        // Метки DropDownItem
        BetaLabel: "Beta",
        Paid: "Paid",
        // Selector
        ClearFilter: "Clear filter",
        Back: "Back",
        ContainsSpecCharacter: "Contains special characters",
        NoRoomsFound: "No rooms found",
        SelectorFormRoomEmptyScreenDescription: "Create a form filling room...",
        SelectorVDREmptyScreenDescription: "Create a virtual data room...",
        CreateFormFillingRoom: "Create form filling room",
        CreateVirtualDataRoom: "Create virtual data room",
        // FileInput
        NotSupportedFormat: "Sorry, this file format isn't supported",
      },
    },
    "ru/Common.json": {
      data: {
        Done: "Готово",
        Warning: "Предупреждение",
        Alert: "Внимание",
        Info: "Информация",
        BetaLabel: "Бета",
        Paid: "Платно",
        ClearFilter: "Очистить фильтр",
        Back: "Назад",
        // ...остальные переводы
      },
    },
    // Добавьте другие языки при необходимости
  },
};
```

### Определение языка

Компоненты читают язык из cookie `asc_language`. Сопоставление языка:

- `en-US` и `en-GB` преобразуются в `en`;
- другие значения используются без изменения, например `ru`, `de`, `fr`.

### Ключи переводов по компонентам

| Компонент | Ключи переводов |
|-----------|-----------------|
| Toast | `Done`, `Warning`, `Alert`, `Info` |
| DropDownItem | `BetaLabel`, `Paid` |
| Selector | `ClearFilter`, `Back`, `ContainsSpecCharacter`, `NoRoomsFound`, `SelectorFormRoomEmptyScreenDescription`, `SelectorVDREmptyScreenDescription`, `CreateFormFillingRoom`, `CreateVirtualDataRoom` |

### Использование getCommonTranslation

Служебную функцию `getCommonTranslation` можно импортировать напрямую:

```typescript
import { getCommonTranslation } from "@docspace/ui-kit/utils";

const title = getCommonTranslation("Done"); // Локализованное "Done" или undefined
const label = getCommonTranslation("BetaLabel"); // Локализованное "BetaLabel" или undefined
```

## Провайдеры и i18n

Компонент `Providers` интегрирует i18next для полноценной интернационализации. Такой способ рекомендуется приложениям, которым нужны React-хуки `useTranslation`, автоматическое определение языка и мост `window.i18n` для автономных компонентов.

### Принцип работы

1. **TranslationProvider** инициализирует экземпляр i18next переданными переводами.
2. Дочерние компоненты оборачиваются в `I18nextProvider` из `react-i18next`.
3. Провайдер также задаёт `window.i18n.t` и `window.i18n.loaded`, чтобы Toast, DropDownItem, Selector и страницы ошибок могли получать переводы без React-контекста.

### Структура переводов

Переводы используют вложенный тип `TTranslations` на основе `Map`:

```typescript
type TTranslations = Map<
  string,                              // код языка: en, ru, fr
  Map<
    string,                            // пространство имён, всегда Common
    Record<string, string>             // пары «ключ - перевод»
  >
>;
```

### Пошаговая настройка

#### 1. Импортируйте файлы локалей

В библиотеку входят файлы 32 языков в `@docspace/ui-kit/locales/`:

```typescript
import enCommon from "@docspace/ui-kit/locales/en/Common.json";
import ruCommon from "@docspace/ui-kit/locales/ru/Common.json";
import deCommon from "@docspace/ui-kit/locales/de/Common.json";
import frCommon from "@docspace/ui-kit/locales/fr/Common.json";
// Добавьте необходимые языки.
```

Доступные локали: `ar-SA`, `az`, `bg`, `cs`, `de`, `el-GR`, `en`, `es`, `fi`, `fr`, `hy-AM`, `it`, `ja-JP`, `ko-KR`, `lo-LA`, `lv`, `nl`, `pl`, `pt`, `pt-BR`, `ro`, `ru`, `si`, `sk`, `sl`, `sq-AL`, `sr-Cyrl-RS`, `sr-Latn-RS`, `tr`, `uk-UA`, `vi`, `zh-CN`.

#### 2. Создайте карту переводов

```typescript
import type { TTranslations } from "@docspace/ui-kit/providers/translation";

const translations: TTranslations = new Map([
  ["en", new Map([["Common", enCommon]])],
  ["ru", new Map([["Common", ruCommon]])],
  ["de", new Map([["Common", deCommon]])],
  ["fr", new Map([["Common", frCommon]])],
]);
```

#### 3. Оберните приложение в Providers

```tsx
import { Providers } from "@docspace/ui-kit/providers";

function App() {
  return (
    <Providers
      url="https://example-maticonoffice.ru"
      apiKey="your-api-key"
      translations={translations}
      locale="ru"
      initialTheme="BaseStr"
      errorFallback={(error) => <div>Ошибка: {error.message}</div>}
      onError={(error, errorInfo) => console.error(error, errorInfo)}
    >
      <YourApp />
    </Providers>
  );
}
```

#### 4. Используйте переводы в компонентах

Внутри дерева провайдера применяйте хуки `react-i18next`:

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation("Common");

  return (
    <div>
      <h1>{t("Settings")}</h1>
      <button>{t("SaveButton")}</button>
      <button>{t("CancelButton")}</button>
    </div>
  );
}
```

### Выбор активного языка

`TranslationProvider` выбирает язык в следующем порядке:

1. свойство `locale`, заданное явно;
2. `user.cultureName` из профиля пользователя;
3. `settings.culture` из настроек портала;
4. `"en"` как резервное значение.

Если `settings` и `user` не переданы свойствами, провайдер получает их автоматически через API DocSpace по указанным `url` и `apiKey`.

### Свойства Providers

| Свойство | Тип | Обязательное | Описание |
|----------|-----|--------------|----------|
| `url` | `string` | да | Базовый URL API DocSpace |
| `apiKey` | `string` | да | API-ключ аутентификации |
| `translations` | `TTranslations` | нет | Карта ресурсов переводов |
| `locale` | `string` | нет | Явно заданная локаль, например `"en"` или `"ru"` |
| `settings` | `SettingsDto` | нет | Настройки портала, получаемые из API, если не переданы |
| `user` | `EmployeeFullDto` | нет | Текущий пользователь, получаемый из API, если не передан |
| `initialTheme` | `ThemeKeys` | нет | Начальная тема: `"BaseStr"`, `"DarkStr"`, `"SystemStr"` |
| `systemTheme` | `ThemeKeys` | нет | Переопределение определённой системной темы |
| `colorTheme` | `CustomColorThemesSettingsDto` | нет | Данные цветовой темы |
| `errorFallback` | `ReactNode \| ((error: Error) => ReactNode)` | нет | Пользовательский интерфейс ошибки |
| `onError` | `(error: Error, errorInfo: ErrorInfo) => void` | нет | Обработчик ошибки |
| `children` | `ReactNode` | да | Дочерние компоненты |

### Использование отдельных провайдеров

Для более точного управления провайдеры можно использовать отдельно:

```tsx
import { ApiProvider } from "@docspace/ui-kit/providers/api";
import { TranslationProvider } from "@docspace/ui-kit/providers/translation";
import { ThemeProvider } from "@docspace/ui-kit/providers/theme";
import { ErrorBoundary } from "@docspace/ui-kit/providers/error-boundary";

<ErrorBoundary fallback={<ErrorPage />}>
  <ApiProvider url="https://example-maticonoffice.ru" apiKey="your-api-key">
    <TranslationProvider
      translations={translations}
      locale="ru"
      settings={settings}
      user={user}
    >
      <ThemeProvider initialTheme="BaseStr" locale="ru">
        <App />
      </ThemeProvider>
    </TranslationProvider>
  </ApiProvider>
</ErrorBoundary>
```

### Использование useApi

Внутри `ApiProvider` клиенты API доступны через хук `useApi`:

```tsx
import { useApi } from "@docspace/ui-kit/providers/api";

function MyComponent() {
  const { profilesApi, commonSettingsApi } = useApi();

  useEffect(() => {
    profilesApi.getSelfProfile().then((res) => {
      console.log(res.data.response);
    });
  }, [profilesApi]);
}
```

## Разработка

Клонируйте этот репозиторий или работайте в [монорепозитории DocSpace-client](https://github.com/MaticonOffice/DocSpace-client), затем используйте следующие команды.

### Storybook - интерактивный каталог компонентов

```bash
pnpm storybook
```

Storybook открывается по адресу `http://localhost:6006`. В нём можно просматривать компоненты, менять свойства на панели Controls и проверять результат в реальном времени.

### Тесты

```bash
pnpm test           # Однократный запуск всех тестов
pnpm test:watch     # Режим наблюдения
pnpm test:coverage  # Отчёт о покрытии
pnpm test:ui        # Интерфейс Vitest
```

### Сборка

```bash
pnpm build          # Рабочая сборка ESM, CJS и деклараций типов
pnpm build:watch    # Пересборка при изменениях
```

### Проверка и форматирование

```bash
pnpm lint           # Проверка Biome
pnpm lint:fix       # Автоматическое исправление Biome
pnpm format         # Проверка форматирования
pnpm format:fix     # Автоматическое форматирование
```

## Полезные ссылки

| Ресурс | URL |
|--------|-----|
| Сайт Maticon Office | [maticonoffice.ru](https://www.maticonoffice.ru) |
| Монорепозиторий DocSpace-client | [github.com/MaticonOffice/DocSpace-client](https://github.com/MaticonOffice/DocSpace-client) |
| API Maticon Office | [api.maticonoffice.ru](https://api.maticonoffice.ru) |
| Форум сообщества | [community.maticonoffice.ru](https://community.maticonoffice.ru) |
| Справочный центр | [help.maticonoffice.ru](https://help.maticonoffice.ru) |
| Обратная связь | [feedback.maticonoffice.ru](https://feedback.maticonoffice.ru/forums/966080-your-voice-matters) |

## Участие в разработке

Ошибки и запросы возможностей отслеживаются в [репозитории DocSpace-client](https://github.com/MaticonOffice/DocSpace-client/issues). Откройте задачу или Pull Request в этом репозитории либо начните обсуждение на [форуме сообщества](https://community.maticonoffice.ru).

## Лицензия

Библиотека распространяется по лицензии [GNU AGPL v3](http://www.gnu.org/licenses/agpl-3.0.html). Полный текст лицензии приведён в исходных файлах.
