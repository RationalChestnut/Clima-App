import React, { useContext, useEffect } from "react";
import { View, Text, LogBox } from "react-native";
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

function fillMonth(currentMonth) {
  const filledMonth = [...currentMonth];
  const today = new Date();
  let daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

  // eslint-disable-next-line no-loop-func
  while (!currentMonth.find((day) => day.date === daysInMonth)) {
    filledMonth.push({ date: daysInMonth, tasks: -1 });
    daysInMonth -= 1;
  }

  filledMonth.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return filledMonth;
}

// eslint-disable-next-line react/prop-types
function Calendar({ currentMonth, before }) {
  const theme = useContext(ThemeContext);
  const filledMonth = fillMonth(currentMonth);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists"]);
  }, []);

  return (
    <CalendarGrid
      itemDimension={40}
      spacing={theme.sizes.sm}
      data={filledMonth}
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
