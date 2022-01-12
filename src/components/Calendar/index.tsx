import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from 'react-native-calendars';
import { generateInterval } from './generateInterval';

import theme from '../../styles/theme';
import { ptBR } from '../../screens/Scheduling/localeConfig'; 

import {
  Container
} from './styles';

function getActualDate() {
  const today: Date = new Date();
  const dd: string = String(today.getDate()).padStart(2, '0');
  const mm: string = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy: number = today.getFullYear();
  const dataAtual = mm + '/' + dd + '/' + yyyy; 
  return dataAtual
  
}
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

 interface MarkedDateProps{
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  },
}

 interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;  
  timestamp: number;
}

function Calendar({markedDates, onDayPress}: CalendarProps){
  return (    
    <CustomCalendar 
      renderArrow={( direction ) => 
        <Feather          
          size={24}
          color={theme.colors.text}
          name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
        />    
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 5,
        marginBottom: 5
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}

      firstDay={1}
      minDate={getActualDate()}
      markedDates={markedDates}
      onDayPress={onDayPress}
      markingType="period"

    />
  );
}

export { Calendar, MarkedDateProps, DayProps, generateInterval}