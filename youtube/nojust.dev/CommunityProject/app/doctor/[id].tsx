import { View, Text , Alert } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';

import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils
} from 'react-native-calendars';

import {timelineEvents, getDate} from '../../data/timeLineEvents';
import { useRouter, useSearchParams } from 'expo-router';

const START_OF_DAY = 8;
const END_OF_DAY = 18;
const INITIAL_TIME = {hour: 9, minutes: 0};
const EVENTS: TimelineEventProps[] = timelineEvents;

const INCREMENTS = 30;

export default function DoctorsPage() {
  const { id } = useSearchParams()
  const [currentDate, setCurrentDate]  = useState(getDate()); 
  const [eventsByDate, setEventsByDate] = useState( groupBy(EVENTS, e => CalendarUtils.getCalendarDateString(e.start)) as {
    [key: string]: TimelineEventProps[];
  });
  const [slots, setSlots] =useState({});

  const marked = {
    [`${getDate(-1)}`]: {marked: true},
    [`${getDate()}`]: {marked: true},
    [`${getDate(1)}`]: {marked: true},
    [`${getDate(2)}`]: {marked: true},
    [`${getDate(4)}`]: {marked: true}
  };

  const router= useRouter();
  



  useEffect(() => {
      let timeSlotDate = new Date();
      //timeSlotDate.setHours(START_OF_DAY);
      timeSlotDate.setMinutes(0);
      timeSlotDate.setSeconds(0);
      timeSlotDate.setMilliseconds(0);
      timeSlotDate.setHours(START_OF_DAY);

      let endOfDay = new Date();
      endOfDay.setHours(END_OF_DAY);
      

       const timeSlot =  `${getDate(-1)} ${START_OF_DAY}:00:00`;
       const endOfDate =  `${getDate(-1)} ${END_OF_DAY}:00:00`;
       
       const slots = [];

       while(timeSlotDate < endOfDay) {
           const start = timeSlotDate.toISOString();
           timeSlotDate.setMinutes( timeSlotDate.getMinutes() + INCREMENTS );
           const end = timeSlotDate.toISOString();
           if (timeSlotDate >= endOfDay) {
            break;
           }
           slots.push({
               start,
               end,
               title: 'Merge Request to React Native Calendars',
               summary: 'Merge Timeline Calendar to React Native Calendars'
           })
       }
       //console.log(slots);
       setSlots(groupBy(slots, e => CalendarUtils.getCalendarDateString(e.start)) as {
        [key: string]: TimelineEventProps[];
      });
        
  },[])

  const onDateChanged = (date: string) => {
    //this.setState({currentDate: date});
    setCurrentDate(date)
  };

  const onMonthChange = (month: any, updateSource: any) => {
    console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  const createNewEvent: TimelineProps['onBackgroundLongPress'] = (timeString, timeObject) => {
    console.log("createNewEvent: ", timeString, timeObject);
    const {eventsByDate} = this.state;
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, '0')}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, '0')}`;

    const newEvent = {
      id: 'draft',
      start: `${timeString}`,
      end: `${timeObject.date} ${hourString}:${minutesString}:00`,
      title: 'New Event',
      color: 'white'
    };

    if (timeObject.date) {
      if (eventsByDate[timeObject.date]) {
        eventsByDate[timeObject.date] = [...eventsByDate[timeObject.date], newEvent];
        this.setState({eventsByDate});
      } else {
        eventsByDate[timeObject.date] = [newEvent];
        this.setState({eventsByDate: {...eventsByDate}});
      }
    }
  };

   const approveNewEvent: TimelineProps['onBackgroundLongPressOut'] = (_timeString, timeObject) => {
    console.log("approveNewEvent", timeObject,_timeString);

    const {eventsByDate} = this.state;
    console.log("aqui ingreso ");
    Alert.prompt('New Event', 'Enter event title', [
      {
        text: 'Cancel',
        onPress: () => {
          if (timeObject.date) {
            eventsByDate[timeObject.date] = filter(eventsByDate[timeObject.date], e => e.id !== 'draft');

            this.setState({
              eventsByDate
            });
          }
        }
      },
      {
        text: 'Create',
        onPress: eventTitle => {
          if (timeObject.date) {
            const draftEvent = find(eventsByDate[timeObject.date], {id: 'draft'});
            if (draftEvent) {
              draftEvent.id = undefined;
              draftEvent.title = eventTitle ?? 'New Event';
              draftEvent.color = 'lightgreen';
              eventsByDate[timeObject.date] = [...eventsByDate[timeObject.date]];

              this.setState({
                eventsByDate
              });
            }
          }
        }
      }
    ]);
  };

  const onConfirmEvent = (event: Event) => {
      router.replace(`/appoinment/${1}`);
  }

  const onEventPress = (event: Event) => {
    console.log(event);
    Alert.alert("Confirm Appointment", 
      `Please Confirm Appointment with doctor ${id} on
      ${new Date(event.start).toDateString()} at ${new Date(event.start).toLocaleTimeString()}`
     , [
        {
          text: 'Cancel',
          style: 'cancel',
        },
         { text: 'OK', onPress: () => onConfirmEvent(event)},
     ]);
  }
  const  timelineProps: Partial<TimelineProps> = {
    format24h: true,
    start: START_OF_DAY  - 1 , // comienza la hora del dia
    end: END_OF_DAY  + 1,
    onBackgroundLongPress: createNewEvent,
    onBackgroundLongPressOut: approveNewEvent,
    // scrollToFirst: true,
    unavailableHours: [
        {start: 0, end: 8}, 
        {start: 6, end: 24}],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
    onEventPress,
  };



 
  return (
    <CalendarProvider
    date={currentDate}
    onDateChanged={onDateChanged}
    onMonthChange={onMonthChange}
    showTodayButton
    disabledOpacity={0.6}
    // numberOfDays={3}
  >
    <ExpandableCalendar
      firstDay={1}
      //leftArrowImageSource={require('../img/previous.png')}
      //rightArrowImageSource={require('../img/next.png')}
      markedDates={marked}
    />
    <TimelineList
      events={slots}
      timelineProps={timelineProps}
      showNowIndicator
      // scrollToNow
      scrollToFirst
      initialTime={INITIAL_TIME}
    />
  </CalendarProvider>
  )
}
