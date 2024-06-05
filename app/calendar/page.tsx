'use client'
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, Alert, Space, Button} from 'antd';
import { Typography } from 'antd';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs'


const weekndText = "В подсчетах не учитывается";

const App: React.FC = () => {
  const [value, setValue] = useState<Dayjs>(() => dayjs());
  const [selectedValue, setSelectedValue] = useState<Dayjs | null>(() => dayjs());
  const [disabledDates, setDisabledDates] = useState<Dayjs[]>([dayjs('2024-06-05'), dayjs('2024-07-11'), dayjs('2024-08-11')])

  //fetch from backend
  //let disabledDates = [dayjs('2024-06-05'), dayjs('2024-07-11'), dayjs('2024-08-11')]

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  const checkDisabledDate = (dateValue: Dayjs): boolean | undefined => {
    if (dateValue) {
      let result = disabledDates.find(
        (date) =>
          date.month() == dateValue.month() &&
          date.date() == dateValue.date() &&
          date.year() == dateValue.year()
      );
      if (result) {
        return true;
      } else false;
    } else false;
  };


  const dateCellRender = (dateValue: Dayjs) => {
    if (
      disabledDates.find(
        (date) =>
          date.month() == dateValue.month() &&
          date.date() == dateValue.date() &&
          date.year() == dateValue.year()
      )
    ) {
      return (
        <ul className="events">
          <Badge status="error" text={weekndText} />
        </ul>
      );
    }
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  //include date into calculations
  const includeDate = async () => {
    //
    // delete date from db
    //
    await excludeDateFromDbAsync().then(() => {
      let index = disabledDates.findIndex(
        (date) =>
          date.month() == selectedValue?.month() &&
          date.date() == selectedValue?.date() &&
          date.year() == selectedValue?.year()
      );
      if (index > 0) {
        disabledDates.splice(index, 1);
        setDisabledDates([...disabledDates]);
      }
    });
  };

  const includeDateToDbAsync = async () => {

  }

  //exclude date from calculations and mark it on calendar
  const excludeDate = async () => {
    //
    // update db here
    //
    await excludeDateFromDbAsync().then(() => {
      let dateToExclude = dayjs(selectedValue?.format("YYYY-MM-DD"));
      let newArr = [...disabledDates, dateToExclude];
      setDisabledDates(newArr);
    });
  };

  const excludeDateFromDbAsync = async () => {
    
  }

  return (
    <div>
      <div style={{ margin: 20 }}>
        <Typography.Title level={3}>
          Админ панель для исключения дат подсчета
        </Typography.Title>
      </div>
      <div
        style={{
          width: "90%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          marginLeft: 20,
        }}
      >
        <Alert
          type={
            checkDisabledDate(dayjs(selectedValue?.format("YYYY-MM-DD")))
              ? "warning"
              : "info"
          }
          message={`Вы выбрали дату: ${selectedValue?.format("YYYY-MM-DD")}`}
          action={
            <Space direction="vertical">
              {checkDisabledDate(dayjs(selectedValue?.format("YYYY-MM-DD"))) ? (
                <Button size="small" danger ghost onClick={includeDate}>
                  Включить в расчеты
                </Button>
              ) : (
                <Button size="small" type="primary" onClick={excludeDate}>
                  Исключить из расчетов
                </Button>
              )}
            </Space>
          }
        />
        <Calendar
          onPanelChange={onPanelChange}
          onSelect={onSelect}
          cellRender={cellRender}
        />
      </div>
    </div>
  );
}

export default App;


