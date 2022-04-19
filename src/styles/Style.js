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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxHeight: '18%',
    overflow: 'auto',
    marginBottom: '2%',
  },
  allTasks__filterLine: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  tasksFilter__listWrapper: {
    position: 'relative',
  },
  tasksFilter__btn: {
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
  tasksFilter__list: {
    position: 'absolute',
    top: '0',
    left: '0',
    maxHeight: '50vh',
    minWidth: '10vw',
    maxWidth: '50vw',
    overflow: 'auto',
    listStyle: 'none',
    backgroundColor: '#ffffff',
    border: '1px solid #000000',
    zIndex: '2',
  },
  tasksFilter__listItem: {
    borderBottom: '1px solid #000000',
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
