import React, { useContext } from "react";
import { View, Text } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { FlatGrid } from "react-native-super-grid";

const CalendarGrid = styled(FlatGrid)`
  flex: 1;
  align-self: center;
`;

const CalendarItem = styled(View)`
  flex: 1;
  aspect-ratio: 0.9;
  padding: ${(props) => props.theme.sizes.xs}px;
  align-items: center;
  border-radius: ${(props) => props.theme.sizes.sm}px;
`;

const TasksTextContainer = styled(View)`
  flex: 1.5;
  flex-direction: row;
  align-items: flex-end;
`;

const TasksText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.boldHeading};
  font-weight: bold;
  color: white;
`;

const DateText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
  flex: 1;
  color: white;
  text-align: center;
`;

function dateToString(date) {
  if (date % 10 === 1 && date !== 11) {
    return `${date}st`;
  }

  if (date % 10 === 2 && date !== 12) {
    return `${date}nd`;
  }

  if (date % 10 === 3 && date !== 13) {
    return `${date}rd`;
  }

  return `${date}th`;
}

function generateMonth(data) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
  const currentDate = date.getDate();

  const currentMonthData = data && data[currentYear] ? data[currentYear][currentMonth] : {};
  let fullMonth = {};
  if (currentMonthData) {
    Object.keys(currentMonthData).forEach((week) => {
      fullMonth = { ...fullMonth, ...currentMonthData[week] };
    });
  }

  const returnMonthData = [];
  for (let i = 1; i <= daysInCurrentMonth; i += 1) {
    if (i > currentDate) {
      returnMonthData.push({ date: i, tasks: -1 });
      // eslint-disable-next-line no-continue
      continue;
    }
    if (fullMonth[i]) {
      returnMonthData.push({ date: i, tasks: fullMonth[i].tasksCompleted });
    } else {
      returnMonthData.push({ date: i, tasks: 0 });
    }
  }

  returnMonthData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return returnMonthData;
}

// eslint-disable-next-line react/prop-types
function Calendar({ before, data }) {
  const theme = useContext(ThemeContext);

  const currentMonth = generateMonth(data);

  return (
    <CalendarGrid
      itemDimension={40}
      spacing={theme.sizes.sm}
      data={currentMonth}
      ListHeaderComponent={before}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => {
        let backgroundColor = theme.colors.lightGreen;

        if (item.tasks === 0) {
          backgroundColor = theme.colors.red;
        }

        if (item.date === new Date().getDate()) {
          backgroundColor = theme.colors.purple;
        }

        if (item.date > new Date().getDate()) {
          backgroundColor = theme.colors.gray;
        }

        return (
          <CalendarItem
            style={{
              backgroundColor,
            }}
          >
            <TasksTextContainer>
              <TasksText>{item.date > new Date().getDate() ? `-` : item.tasks}</TasksText>
            </TasksTextContainer>
            <DateText>{dateToString(item.date)}</DateText>
          </CalendarItem>
        );
      }}
    />
  );
}

export default Calendar;
