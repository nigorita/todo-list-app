import React, { useState } from 'react';
import styled from 'styled-components';

const Check = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10%;
`;
const Ul = styled.ul`
  font-family: sans-serif;
`;

const Li = styled.li`
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  border: 1px dotted #326d7d;
  border-radius: 10px;
  background-color: #cafae8;
  padding-top: 5px;
`;
const Butt = styled.button`
  border-radius: var(--border-button-border-radius, 4px) !important;
  font-size: var(--font-button-font-size, 14px) !important;
  line-height: var(--font-button-line-height, 10px) !important;
  letter-spacing: var(--font-button-letter-spacing, normal) !important;
  font-family: var(
    --font-button-font-family,
    Circular,
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    Helvetica Neue,
    sans-serif
  ) !important;
  text-transform: var(--font-button-text-transform, undefined) !important;
  padding-top: var(--spacing-button-vertical, 10px) !important;
  padding-bottom: var(--spacing-button-vertical, 10px) !important;
  font-weight: var(--font-bold-font-weight, 800) !important;
  border-width: var(--border-button-border-width, 2px) !important;
  padding-left: var(--spacing-button-horizontal, 22px) !important;
  padding-right: var(--spacing-button-horizontal, 22px) !important;
  box-shadow: var(--shadow-button-level0-box-shadow, none) !important;
  background: var(--color-buttons-primary-color, #347d32) !important;
  border-color: var(--color-buttons-primary-border, transparent) !important;
  color: var(--color-buttons-primary-text, #ffffff) !important;
`;

const Rem = styled.button`
  border-radius: var(--border-button-border-radius, 14px) !important;
  font-size: var(--font-button-font-size, 14px) !important;
  line-height: var(--font-button-line-height, 8px) !important;
  letter-spacing: var(--font-button-letter-spacing, normal) !important;
  font-family: var(
    --font-button-font-family,
    Circular,
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    Helvetica Neue,
    sans-serif
  ) !important;
  text-transform: var(--font-button-text-transform, undefined) !important;
  padding-top: var(--spacing-button-vertical, 10px) !important;
  padding-bottom: var(--spacing-button-vertical, 10px) !important;
  font-weight: var(--font-bold-font-weight, 200) !important;
  border-width: var(--border-button-border-width, 2px) !important;
  padding-left: var(--spacing-button-horizontal, 22px) !important;
  padding-right: var(--spacing-button-horizontal, 22px) !important;
  box-shadow: var(--shadow-button-level0-box-shadow, none) !important;
  background: var(--color-buttons-primary-color, #ff5a5f) !important;
  border-color: var(--color-buttons-primary-border, transparent) !important;
  color: var(--color-buttons-primary-text, #ffffff) !important;
`;

const PriColor = styled.div`
  color: ${props =>
    props.priority === 'High'
      ? 'red'
      : props.priority === 'Medium'
      ? 'orange'
      : 'green'};

  font-weight: bold;
`;

const H1 = styled.h1`
  text-align: center;
  color: #aae346;
  font-family: sans-serif;
  padding-top: 60px;
  opacity: 0.5;
`;

const Header = styled.header`
  margin: auto;
  background-color: #d2eda1;
  width: 250px;
  height: 150px;
  border-radius: 50%;
  margin: 30px auto;
`;

const Navi = styled.nav`
  display: flex;

  justify-content: flex-end;
  height: 70px;
`;

const BB = styled.div`
  color: red;
  border: none;
  padding-top: 30px;
  padding-right: 30px;
  border-radius: 10%;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 18px;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding-left: 15px;
  width: 500px;
  height: 30px;
`;

const Prio = styled.input`
  padding: 0.1em;
  margin: 0.1em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding-left: 15px;
  width: 22px;
  height: 20px;
`;

const Main = styled.div`
  background-color: #c0f078;
  width: 45%;
  margin: 0 auto;
  padding: 30px;
  border: 3px inset #527d11;
  display: ${props => (!props.hidden ? 'flex' : 'none')};

  flex-direction: column;
  align-items: center;
  border-radius: 70%;
`;

const Opts = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  justify-content: space-between;
  font-family: sans-serif;
`;

const Lab = styled.label`
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 400;
`;

function App() {
  const initTask = {
    description: '',
    done: false,
    priority: 'Medium',
  };

  const [todolist, setTodolist] = useState([]);

  const [task, setTask] = useState(initTask);
  const [hide, setHide] = useState(true);

  return (
    <div>
      <Navi>
        <BB>
          <button onClick={() => setHide(false)}>Create a ToDo</button>
          <button>Archive</button>
          <button>Log Out</button>
        </BB>
      </Navi>
      <Header>
        <H1> To Dos </H1>
      </Header>

      <Main hidden={hide}>
        <Lab>Insert a new Task:</Lab>

        <Input
          type="text"
          value={task.description}
          onChange={e => setTask({ ...task, description: e.target.value })}
        />
        <br />
        <Opts>
          Priority:
          <div>
            <Prio
              type="radio"
              value="High"
              checked={task.priority === 'High'}
              onChange={e => setTask({ ...task, priority: e.target.value })}
            />

            <label for="High">High</label>
          </div>
          <div>
            <Prio
              type="radio"
              value="Medium"
              checked={task.priority === 'Medium'}
              onChange={e => setTask({ ...task, priority: e.target.value })}
            />
            <label for="Medium">Medium</label>
          </div>
          <div>
            <Prio
              type="radio"
              value="Low"
              checked={task.priority === 'Low'}
              onChange={e => setTask({ ...task, priority: e.target.value })}
            />
            <label for="Low">Low</label>
          </div>
        </Opts>
        <br />
        <Butt
          onClick={() => {
            if (task.description !== '') {
              setTodolist([...todolist, task]);

              setTask(initTask);
            }
          }}
        >
          Add Task to the list
        </Butt>
      </Main>
      <Ul>
        {todolist.map((value, index) => (
          <Li>
            {' '}
            <Check
              type="checkbox"
              checked={value.done === true}
              onChange={() => {
                const newTodolist = [...todolist];
                newTodolist[index].done = !todolist[index].done;

                setTodolist(newTodolist);
              }}
            />
            <div style={{ color: '#04014a', fontWeight: 'bold' }}>
              {value.description}
            </div>
            {'  |  '} Priority:{' '}
            <PriColor priority={value.priority}>{value.priority}</PriColor>
            {'  |  '}
            {value.done ? (
              <div style={{ fontWeight: 'bold', color: '#03fc56' }}>'Done'</div>
            ) : (
              <div style={{ color: '#fc6b03', fontWeight: 'bold' }}>
                'to do'
              </div>
            )}
            <Rem
              onClick={() => {
                const newTodolist = [...todolist];
                newTodolist.splice(index, 1);

                setTodolist(newTodolist);
              }}
            >
              remove task
            </Rem>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default App;
