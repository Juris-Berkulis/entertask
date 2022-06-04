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
    userSelect: 'none',
    boxShadow: 'inset 0px 4.194vh 4.194vh -2.097vh #caffca, inset 0px -4.194vh 4.194vh -2.097vh #225522, 0px 0.483vh 0.483vh #337733',
  },
  header__link: {
    height: '100%',
    padding: '0 2vw',
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: 'calc(1rem / 16 * 16)',
    lineHeight: '10vh',
    backgroundColor: 'transparent',
    boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 6.291vh 6.291vh -3.1455vh #caffca, inset 0px -6.291vh 6.291vh -3.1455vh #225522, 0px 0.805vh 0.805vh #337733',
    textShadow: '#393939 1px 1px 1px',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 5.4522vh 5.4522vh -2.7261vh #caffca, inset 0px -5.4522vh 5.4522vh -2.7261vh #225522, 0px 0.6279vh 0.6279vh #337733',
    },
    '&:active': {
      backgroundColor: '#006600',
      boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 4.194vh 4.194vh -2.097vh #caffca, inset 0px -4.194vh 4.194vh -2.097vh #225522, 0px 0.483vh 0.483vh #337733',
    },
  },
  header__link_activePage: {
    cursor: 'default',
    backgroundColor: '#006600',
    boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 4.194vh 4.194vh -2.097vh #caffca, inset 0px -4.194vh 4.194vh -2.097vh #225522, 0px 0.483vh 0.483vh #337733',
    '&:hover': {
      backgroundColor: '#006600',
      boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 4.194vh 4.194vh -2.097vh #caffca, inset 0px -4.194vh 4.194vh -2.097vh #225522, 0px 0.483vh 0.483vh #337733',
    },
    '&:active': {
      backgroundColor: '#006600',
      boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 4.194vh 4.194vh -2.097vh #caffca, inset 0px -4.194vh 4.194vh -2.097vh #225522, 0px 0.483vh 0.483vh #337733',
    },
  },
  header__link_logoutBtn: {
    border: 'none',
    cursor: 'pointer',
    fontSize: 'calc(1rem / 16 * 16)',
  },
  allTasks: {
    height: '100%',
  },
  allTasks__filterWrapper: {
    textAlign: 'center',
    maxHeight: '18%',
    maxWidth: '1100px',
    overflow: 'auto',
    margin: '0 auto 2%',
    userSelect: 'none',
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
    padding: '0 15px 0 5px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  allTasks__tableColumnTitle_subtaskName: {
    width: 2 * styleConsts.width.tableCell.substring(0, styleConsts.width.tableCell.length - 2) + 'px',
  },
  allTasks__tableColumnTitle_subtaskName_mobileDevice: {
    width: 2 * styleConsts.width.tableCellMobileDevice.substring(0, styleConsts.width.tableCellMobileDevice.length - 2) + 'px',
  },
  allTasks__tableColumnTitle_taskComment: {
    width: 2 * styleConsts.width.tableCell.substring(0, styleConsts.width.tableCell.length - 2) + 'px',
  },
  allTasks__tableColumnTitle_taskComment_mobileDevice: {
    width: 2 * styleConsts.width.tableCellMobileDevice.substring(0, styleConsts.width.tableCellMobileDevice.length - 2) + 'px',
  },
  allTasks__tasksList: {
    height: `calc(100% - ${2 * styleConsts.fontSize.html.substring(0, styleConsts.fontSize.html.length - 2)}px)`,
    overflowY: 'scroll',
  },
  allTasks__tasksList_mobileDevice: {
    height: `calc(100% - ${2 * styleConsts.fontSize.htmlMobileDevice.substring(0, styleConsts.fontSize.htmlMobileDevice.length - 2)}px)`,
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
    textAlign: 'start',
    fontWeight: '700',
    whiteSpace: 'pre-line',
  },
  allTasks__taskListItemParagraph_taskName: {
    fontSize: 'calc(1rem / 16 * 16)',
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
    userSelect: 'none',
    cursor: 'pointer',
  },
  allTasks__taskListItemParagraphValue_status_mobileDevice: {
    fontWeight: '400',
  },
  allTasks__taskListItemParagraphValue_statusPlus: {
    backgroundColor: '#006600',
    '&:hover': {
      backgroundColor: '#008800',
    },
  },
  allTasks__taskListItemParagraphValue_statusMinus: {
    backgroundColor: '#660000',
    '&:hover': {
      backgroundColor: '#880000',
    },
  },
  allTasks__taskListItemLinePannel: {
    position: 'relative',
    userSelect: 'none',
    paddingRight: '1vw',
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
    padding: '0 3px',
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
  allTasks__taskListItemCell_subtaskName: {
    width: 2 * styleConsts.width.tableCell.substring(0, styleConsts.width.tableCell.length - 2) + 'px',
  },
  allTasks__taskListItemCell_subtaskName_mobileDevice: {
    width: 2 * styleConsts.width.tableCellMobileDevice.substring(0, styleConsts.width.tableCellMobileDevice.length - 2) + 'px',
  },
  allTasks__taskListItemCell_taskComment: {
    width: 2 * styleConsts.width.tableCell.substring(0, styleConsts.width.tableCell.length - 2) + 'px',
  },
  allTasks__taskListItemCell_taskComment_mobileDevice: {
    width: 2 * styleConsts.width.tableCellMobileDevice.substring(0, styleConsts.width.tableCellMobileDevice.length - 2) + 'px',
  },
  allTasks__tasksEmptyListText: {
    position: 'fixed',
    left: '50vw',
    transform: 'translateX(-50%)',
    listStyle: 'none',
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
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
    overflow: 'auto',
  },
  tasksFilter__listItem: {
    display: 'flex',
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
    padding: '0 10px',
    overflow: 'auto',
    whiteSpace: 'pre',
    cursor: 'pointer',
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
    '&:hover': {
      backgroundColor: '#aaffaa',
    },
  },
  tasksFilter__listItemIcon: {
    marginRight: '5px',
  },
  tasksFilter__listItemText: {
    display: 'block',
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
    boxShadow: 'inset 0px 15px 15px -7.5px #caffca, inset 0px -15px 15px -7.5px #225522, 0px 3px 3px #337733, 1.5px 3px 3px #337733, -1.5px 3px 3px #337733',
    cursor: 'pointer',
    transition: 'background-color 0.1s linear 0.1s',
    '&:hover': {
      backgroundColor: '#007700',
    },
    '&:active': {
      boxShadow: 'inset 0px 15px 15px -7.5px #caffca, inset 0px -15px 15px -7.5px #225522, 0px 1px 1px #337733, 0px 1px 1px #337733, 0px 1px 1px #337733',
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
    boxShadow: '1px 0px 1px #004400, -1px 0px 1px #004400, inset 0px 6.291vh 6.291vh -3.1455vh #caffca, inset 0px -6.291vh 6.291vh -3.1455vh #225522, 0px 0.805vh 0.805vh #337733, 0.4025vh 0.805vh 0.805vh #337733, -0.4025vh 0.805vh 0.805vh #337733',
    zIndex: '3',
  },
  openTask__controlPanel: {
    marginBottom: '1vh',
    userSelect: 'none',
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
  SigLogWrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: '20px',
    padding: '0 20px',
    color: '#000000',
    fontSize: '16px',
  },
  SigLogField: {
    height: '100%',
    width: '100%',
    padding: '5vh 5vw',
    overflow: 'auto',
  },
  SigLogForm: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SigLogDescription: {
    fontSize: '1em',
    marginBottom: '3vh',
    textAlign: 'center',
  },
  SigLogArea: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SigLogInput: {
    width: '40%',
    marginBottom: '3vh',
    padding: '0.3em 0.6em',
    fontSize: '1em',
    borderRadius: '50em',
    border: '2px solid #006600',
    '&:focus': {
      border: '2px solid #0000ff',
      outline: 'none',
    },
  },
  SigLogInputMobileDevice: {
    width: '100%',
  },
  SigLogEmailInput: {
    marginBottom: '1.5vh',
  },
  SigLogActionErrorArea: {
    width: '80%',
    backgroundColor: '#ffcccc',
    padding: '1em',
    marginBottom: '3vh',
    borderRadius: '1.5em',
  },
  SigLogActionErrorText: {
    textAlign: 'center',
    color: '#ff0000',
    fontSize: '1em',
  },
  SigLogActionButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  SigLogActionBtn: {
    fontSize: '1em',
    margin: '0 10px 1vh',
    padding: '0.3em 0.6em',
    borderRadius: '50em',
    color: '#ffffff',
    backgroundColor: '#006600',
    boxShadow: 'inset 0px 15px 15px -7.5px #caffca, inset 0px -15px 15px -7.5px #225522, 0px 3px 3px #337733',
    cursor: 'pointer',
    transition: 'background-color 0.1s linear 0.1s',
    '&:hover': {
      backgroundColor: '#007700',
    },
    '&:active': {
      boxShadow: 'inset 0px 15px 15px -7.5px #caffca, inset 0px -15px 15px -7.5px #225522, 0px 1px 1px #337733',
    },
  },
  SigLogActionWaiting: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SigLogTitle: {
    fontSize: '1.5em',
    marginBottom: '1vh',
    textAlign: 'center',
  },
  SigLogActionWaitingText: {
    fontSize: '1em',
    marginBottom: '3vh',
    textAlign: 'center',
  },
  SigLogActionWaitingText_countdown: {
    marginBottom: '1vh',
  },
  SigLogActionPreloader: {
    width: '25vw',
    marginBottom: '3vh',
  },
  SigLogInfoDescription: {
    fontSize: '0.9em',
  },
  SigLogInfoLink: {
    color: '#006600',
    textDecoration: 'underline',
    '&:hover': {
      color: '#007700',
      textDecoration: 'none',
    },
  },
  profile_pageTitle: {
    fontSize: 'calc(1rem / 16 * 48)',
    lineHeight: '100%',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  profile_userEmail: {
    fontSize: 'calc(1rem / 16 * 14)',
    lineHeight: '100%',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  profile_pageInfo: {
    fontSize: 'calc(1rem / 16 * 16)',
    lineHeight: '100%',
  },
  profile_installWraper: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  profile_installInfo: {
    marginBottom: '0.5rem',
  },
  profile_installBtn: {
    padding: '0.3em 0.6em',
    borderRadius: '50em',
    color: '#ffffff',
    backgroundColor: '#006600',
    boxShadow: 'inset 0px 15px 15px -7.5px #caffca, inset 0px -15px 15px -7.5px #225522, 0px 3px 3px #337733',
    cursor: 'pointer',
    transition: 'background-color 0.1s linear 0.1s',
    '&:hover': {
      backgroundColor: '#007700',
    },
    '&:active': {
      boxShadow: 'inset 0px 15px 15px -7.5px #caffca, inset 0px -15px 15px -7.5px #225522, 0px 1px 1px #337733',
    },
  },
  deviceOnTheNetwork__wrapper: {
    position: 'fixed',
    top: '2vh',
    right: '2vw',
    height: '6vh',
    width: '6vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    cursor: 'help',
  },
  deviceOnTheNetwork__lamp: {
    height: '1vh',
    width: '1vh',
    border: 'solid 0.2vh #111111',
    borderRadius: '50%',
    backgroundColor: '#cccccc',
  },
  deviceOnTheNetwork__lamp_connectNetwork_1: {
    animation: "$pulseConnectNetwork 5s linear infinite 0.1s"
  },
  deviceOnTheNetwork__lamp_connectNetwork_2: {
    animation: "$pulseConnectNetwork 5s linear infinite 0.35s"
  },
  deviceOnTheNetwork__lamp_connectNetwork_3: {
    animation: "$pulseConnectNetwork 5s linear infinite 0.6s"
  },
  "@keyframes pulseConnectNetwork": {
    "0%": {
      backgroundColor: '#cccccc',
    },
    "47%": {
      backgroundColor: '#cccccc',
    },
    "47.5%": {
      backgroundColor: '#00cc00',
    },
    "52.5%": {
      backgroundColor: '#00cc00',
    },
    "53%": {
      backgroundColor: '#cccccc',
    },
    "100%": {
      backgroundColor: '#cccccc',
    },
  },
  deviceOnTheNetwork__lamp_disconnectNetwork: {
    animation: "$pulseDisconnectNetwork 1s linear infinite 0.1s"
  },
  "@keyframes pulseDisconnectNetwork": {
    "0%": {
      backgroundColor: '#cccccc',
    },
    "24%": {
      backgroundColor: '#cccccc',
    },
    "25%": {
      backgroundColor: '#cc0000',
    },
    "74%": {
      backgroundColor: '#cc0000',
    },
    "75%": {
      backgroundColor: '#cccccc',
    },
    "100%": {
      backgroundColor: '#cccccc',
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
  textAlign_center: {
    textAlign: 'center',
  },
});
