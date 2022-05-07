import { makeStyles } from '@material-ui/styles';
import { styleConsts } from './StyleConsts';

export const useStyles = makeStyles({
  center: {
    padding: '0 calc((100% - 90vw) / 2)',
  },
  main: {
    height: '100vh',
    backgroundColor: '#caffca',
    padding: '0 0 10vh',
  },
  field: {
    height: '90vh !important',
    padding: '5vh 2vw 1vh !important',
    overflow: 'hidden !important',
  },
  field_mobileDevice: {
    padding: '2vh 2vw 5vh !important',
  },
  header: {
    height: '10vh',
    width: '100vw',
    backgroundColor: '#006600',
    padding: '0 10vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__link: {
    height: '100%',
    padding: '0 2vw',
    textDecoration: 'none',
    color: '#ffffff',
    lineHeight: '10vh',
    '&:hover': {
      backgroundColor: '#007700',
    },
  },
  allTasks: {
    height: '100%',
  },
  allTasks__filterWrapper: {
    textAlign: 'center',
    maxHeight: '18%',
    maxWidth: '1000px',
    overflow: 'auto',
    margin: '0 auto 2%',
  },
  allTasks__tableWrapper: {
    width: '100%',
    height: '80%',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '10px', //* - ширина полосы прокрутки.
      height: '10px', //* - высота полосы прокрутки.
    },
  },
  allTasks__table: {
    height: '100%',
    width: 'fit-content',
    overflowX: 'auto',
  },
  allTasks__tableTitleWrapper: {
    height: 2 * styleConsts.fontSize.html.substring(0, styleConsts.fontSize.html.length - 2) + 'px',
    width: '100%',
    paddingRight: '15px',
  },
  allTasks__tableTitleWrapper_mobileDevice: {
    height: 2 * styleConsts.fontSize.htmlMobileDevice.substring(0, styleConsts.fontSize.htmlMobileDevice.length - 2) + 'px',
  },
  allTasks__tableTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  allTasks__tableColumnTitle: {
    width: styleConsts.width.tableCell,
    fontSize: 'calc(1rem / 16 * 16)',
    lineHeight: '100%',
    fontWeight: '700',
    textAlign: 'center',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '0', //* - ширина полосы прокрутки.
      height: '7px', //* - высота полосы прокрутки.
    },
    //* Дальнейшая стилизация навигационных кнопок:
    '&::-webkit-scrollbar-button:single-button': {
      height: '7px',
      width: '7px',
    },
    //* Стилизация левой навигационной кнопки:
    '&::-webkit-scrollbar-button:single-button:horizontal:decrement': {
      borderWidth: '3.5px 7px 3.5px 0',
    },
    //* Стилизация правой навигационной кнопки:
    '&::-webkit-scrollbar-button:single-button:horizontal:increment': {
      borderWidth: '3.5px 0 3.5px 7px',
    },
  },
  allTasks__tableColumnTitle_mobileDevice: {
    width: styleConsts.width.tableCellMobileDevice,
  },
  allTasks__tasksList: {
    height: 'calc(100% - 30px)',
    overflowY: 'scroll',
  },
  allTasks__taskListItem: {
    position: 'relative',
    display: 'flex',
    padding: '1vh 5px',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    '&:hover': {
      backgroundColor: '#99ff99',
    },
  },
  allTasks__taskListItemParagraph: {
    fontSize: 'calc(1rem / 16 * 16)',
    lineHeight: '100%',
    textAlign: 'center',
    fontWeight: '700',
    whiteSpace: 'pre-line',
  },
  allTasks__taskListItemParagraph_taskName: {
    fontSize: 'calc(1rem / 16 * 20)',
    lineHeight: '100%',
  },
  allTasks__taskListItemParagraphValue: {
    fontWeight: '400',
  },
  allTasks__taskListItemParagraphValue_status: {
    height: '17px',
    width: '17px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontWeight: '700',
    borderRadius: '50%',
  },
  allTasks__taskListItemParagraphValue_status_mobileDevice: {
    fontWeight: '400',
  },
  allTasks__taskListItemParagraphValue_statusPlus: {
    backgroundColor: '#006600',
  },
  allTasks__taskListItemParagraphValue_statusMinus: {
    backgroundColor: '#660000',
  },
  allTasks__taskListItemLinePannel: {
    position: 'relative',
  },
  allTasks__taskListItemBtn: {
    marginLeft: '0.5vw',
    padding: '0.5vh 0.5vw',
    fontSize: 'calc(1rem / 16 * 13)',
    color: '#ffffff',
    backgroundColor: '#000066',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000044',
    },
  },
  allTasks__taskListItemBtn_today: {
    backgroundColor: '#ee7700',
    '&:hover': {
      backgroundColor: '#ee4400',
    },
  },
  allTasks__taskListItemBtn_change: {
    transform: 'RotateY(180deg)',
  },
  allTasks__taskListItemBtn_delete: {
    backgroundColor: '#cc0000',
    '&:hover': {
      backgroundColor: '#990000',
    },
  },
  allTasks__taskListItemLineInfo: {
    display: 'flex',
    alignItems: 'stretch',
  },
  allTasks__taskListItemCell: {
    display: 'inline-block',
    width: styleConsts.width.tableCell,
    maxHeight: styleConsts.height.tableCell,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '7px', //* - ширина полосы прокрутки.
      height: '7px', //* - высота полосы прокрутки.
    },
    //* Дальнейшая стилизация навигационных кнопок:
    '&::-webkit-scrollbar-button:single-button': {
      height: '7px',
      width: '7px',
    },
    //* Стилизация верхней навигационной кнопки:
    '&::-webkit-scrollbar-button:single-button:vertical:decrement': {
      borderWidth: '0 3.5px 7px 3.5px',
    },
    //* Стилизация нижней навигационной кнопки:
    '&::-webkit-scrollbar-button:single-button:vertical:increment': {
      borderWidth: '7px 3.5px 0 3.5px',
    },
    //* Стилизация левой навигационной кнопки:
    '&::-webkit-scrollbar-button:single-button:horizontal:decrement': {
      borderWidth: '3.5px 7px 3.5px 0',
    },
    //* Стилизация правой навигационной кнопки:
    '&::-webkit-scrollbar-button:single-button:horizontal:increment': {
      borderWidth: '3.5px 0 3.5px 7px',
    },
  },
  allTasks__taskListItemCell_mobileDevice: {
    width: styleConsts.width.tableCellMobileDevice,
    maxHeight: styleConsts.height.tableCellMobileDevice,
  },
  allTasks__tasksEmptyListText: {
    textAlign: 'center',
    fontSize: 'calc(1em / 16 * 50)',
    lineHeight: '100%',
    color: '#006600',
  },
  tasksFilter: {
    display: 'inline-block',
  },
  tasksFilter__listWrapper: {
    position: 'relative',
  },
  tasksFilter__btn: {
    position: 'relative',
    width: styleConsts.width.tableCell,
    height: '17px',
    fontSize: 'calc(1rem / 16 * 13)',
    cursor: 'pointer',
    border: '1px solid #006600',
    borderRadius: '0',
    color: '#006600',
    backgroundColor: 'transparent',
    transition: 'color 0.2s linear 0.1s, background-color 0.2s linear 0.1s',
    '&:hover': {
      color: '#caffca',
      backgroundColor: '#006600',
    },
  },
  tasksFilter__btn_mobileDevice: {
    width: styleConsts.width.tableCellMobileDevice,
  },
  tasksFilter__signIsTurnOn: {
    position: 'absolute',
    top: '3.5px',
    right: '1px',
    height: '8px',
    width: '8px',
    borderRadius: '50rem',
  },
  tasksFilter__signIsTurnOn_up: {
    backgroundColor: '#55bb55',
  },
  tasksFilter__signIsTurnOn_down: {
    backgroundColor: '#bb5555',
  },
  tasksFilter__list: {
    position: 'fixed',
    top: '50vh',
    left: '50vw',
    minWidth: '10vw',
    maxWidth: '50vw',
    listStyle: 'none',
    backgroundColor: '#eeffee',
    border: '1px solid #000000',
    borderRadius: '10px',
    padding: '0 0 10px',
    textAlign: 'start',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
  },
  tasksFilter__closeListBtn: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    height: '16px',
    width: '16px',
    borderRadius: '50rem',
    fontSize: 'calc(1em / 16 * 12)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#cc0000',
    backgroundColor: 'transparent',
    transition: 'color 0.1s linear 0.1s, background-color 0.1s linear 0.1s',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#cc0000',
    },
  },
  tasksFilter__listTitle: {
    textAlign: 'center',
    padding: '10px',
    fontWeight: '700',
    textDecoration: 'underline',
  },
  tasksFilter__tasksSortingBtn: {
    height: '27px',
    width: '27px',
    marginLeft: '5px',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: 'calc(1em / 16 * 20)',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'font-weight 0.1s linear 0.1s',
    '&:hover': {
      fontWeight: '700',
    },
  },
  tasksFilter__tasksSortingBtnArrow_up: {
    color: '#55bb55',
  },
  tasksFilter__tasksSortingBtnArrow_down: {
    color: '#bb5555',
  },
  tasksFilter__tasksSortingBtnArrow_andUpAndDown: {
    color: '#5555bb',
  },
  tasksFilter__listItemsWrapper: {
    maxHeight: '50vh',
    overflow: 'auto',
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
  },
  tasksFilter__listItem: {
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
    padding: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#aaffaa',
    },
  },
  changeTask__wrapper: {
    height: '80vh',
  },
  changeTask__form: {
    height: '100%',
  },
  changeTask__btnWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: '10vh',
    overflow: 'auto',
  },
  taskInputFields__wrapper: {
    height: '70vh',
    overflow: 'auto',
  },
  taskInputFields__taskEisenhowerMatrixWrapper: {
    margin: '0.5vh 0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  taskInputFields__taskEisenhowerMatrixLabel: {
    width: '25vw',
    display: 'block',
  },
  taskInputFields__taskEisenhowerMatrixValue: {
    width: '50vw',
    display: 'block',
    padding: '1vh 1vw',
  },
  taskInput__wrapper: {
    margin: '0.5vh 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskInput__label: {
    display: 'block',
    width: '25vw',
  },
  taskInput__inputWrapper: {
    width: '50vw',
  },
  taskInput__input: {
    display: 'block',
    width: '50vw',
    padding: '1vh 1vw',
    borderRadius: '50em',
    border: '2px solid #006600',
    '&:focus': {
      border: '2px solid #0000ff',
      outline: 'none',
    },
  },
  taskInput__input_error: {
    border: '2px solid #ff0000',
    '&:focus': {
      border: '2px solid #ff0000',
      outline: 'none',
    },
  },
  taskInput__inputError: {
    margin: '0.2vh 1vw 0.5vh',
    color: '#ff0000',
  },
  btnForChangeTask: {
    margin: '1vh 1vw',
    padding: '1vh 1vw',
    borderRadius: '50em',
    color: '#ffffff',
    backgroundColor: '#006600',
    fontSize: 'calc(1rem / 16 * 13)',
    cursor: 'pointer',
    transition: 'background-color 0.1s linear 0.1s',
    '&:hover': {
      backgroundColor: '#007700',
    },
  },
  openTask__wrapper: {
    position: 'fixed',
    top: '15vh',
    left: '15vw',
    width: '70vw',
    border: '2px solid #000000',
    borderRadius: '15px',
    padding: '15px',
    backgroundColor: '#006600',
    zIndex: '3',
  },
  openTask__controlPanel: {
    marginBottom: '1vh',
  },
  openTask__taskListItemBtnsPannel: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  openTask__taskListItemBtn_close: {
    backgroundColor: '#cc0000',
    '&:hover': {
      backgroundColor: '#990000',
    },
  },
  openTask__taskInfo: {
    overflow: 'auto',
    color: '#ffffff',
  },
  openTask__taskListItemParagraph: {
    textAlign: 'start',
    padding: '0.5vh 0',
    '&:hover': {
      color: '#006600',
      backgroundColor: '#99ff99',
    },
  },
  taskEisenhowerMatrixValue__color_: {
    borderBottom: '5px solid #000000',
  },
  taskEisenhowerMatrixValue__color_0_0: {
    borderBottom: '5px solid #000000',
  },
  taskEisenhowerMatrixValue__color_1_1: {
    borderBottom: '5px solid #aa00aa',
  },
  taskEisenhowerMatrixValue__color_1_2: {
    borderBottom: '5px solid blue',
  },
  taskEisenhowerMatrixValue__color_1_3: {
    borderBottom: '5px solid cyan',
  },
  taskEisenhowerMatrixValue__color_2_1: {
    borderBottom: '5px solid green',
  },
  taskEisenhowerMatrixValue__color_2_2: {
    borderBottom: '5px solid lightgreen',
  },
  taskEisenhowerMatrixValue__color_2_3: {
    borderBottom: '5px solid yellow',
  },
  taskEisenhowerMatrixValue__color_3_1: {
    borderBottom: '5px solid orange',
  },
  taskEisenhowerMatrixValue__color_3_2: {
    borderBottom: '5px solid pink',
  },
  taskEisenhowerMatrixValue__color_3_3: {
    borderBottom: '5px solid red',
  },
});
