import { makeStyles } from '@material-ui/styles';
// import { styleConsts } from './StyleConsts';

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
    padding: '5vh 10vw !important',
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
    overflow: 'auto',
    marginBottom: '2%',
  },
  allTasks__tasksList: {
    height: '80%',
    overflow: 'auto',
  },
  allTasks__taskListItem: {
    position: 'relative',
    padding: '1vh 1vw',
    '&:hover': {
      backgroundColor: '#99ff99',
    },
  },
  allTasks__taskListItemParagraph: {
    fontSize: 'calc(1rem / 16 * 18)',
    lineHeight: '100%',
    textAlign: 'center',
  },
  allTasks__taskListItemParagraph_taskName: {
    fontSize: 'calc(1rem / 16 * 24)',
    lineHeight: '100%',
    fontWeight: '700',
  },
  allTasks__taskListItemBtnsPannel: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  allTasks__taskListItemBtn: {
    marginLeft: '0.5vw',
    padding: '0.5vh 0.5vw',
    color: '#ffffff',
    backgroundColor: '#000066',
    cursor: 'pointer',
  },
  allTasks__taskListItemBtn_change: {
    transform: 'RotateY(180deg)',
  },
  allTasks__taskListItemBtn_delete: {
    backgroundColor: '#cc0000',
  },
  allTasks__taskListItemline: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tasksFilter: {
    display: 'inline-block',
  },
  tasksFilter__listWrapper: {
    position: 'relative',
  },
  tasksFilter__btn: {
    position: 'relative',
    width: '150px',
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
    height: '20px',
    width: '20px',
    marginLeft: '5px',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: 'calc(1em / 16 * 20)',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'font-weight 0 linear 0.1s',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10vh',
    overflow: 'auto',
  },
  taskInputFields__wrapper: {
    height: '70vh',
    overflow: 'auto',
  },
  taskInput__wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskInput__label: {
    display: 'block',
    width: '25vw',
    margin: '1vh 1vw',
  },
  taskInput__input: {
    display: 'block',
    width: '50vw',
    margin: '1vh 1vw',
    padding: '1vh 1vw',
    borderRadius: '50em',
  },
  btnForChangeTask: {
    margin: '1vh 1vw',
    padding: '1vh 1vw',
    borderRadius: '50em',
    color: '#ffffff',
    backgroundColor: '#006600',
    cursor: 'pointer',
    transition: 'background-color 0.1s linear 0.1s',
    '&:hover': {
      backgroundColor: '#007700',
    },
  },
});
