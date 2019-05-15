import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

let boards = [];

const domStringBuilder = () => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id='${board.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h3>${board.name}</h3>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      const boardsArray = resp.data.boards;
      boards = boardsArray;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initBoards };
