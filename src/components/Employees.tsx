
import {data} from './data/employeeData'
import { DataType as RowData} from './data/employeeData';
import { useState } from 'react';
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { Search,Rule, ArrowDropDown,ArrowDropUp  } from '@mui/icons-material';


const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}))



interface TableSortProps {
  data: RowData[];
}

interface TableHeaderProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

const TableHeader = ({ children, reversed, sorted, onSort }: TableHeaderProps) =>  {
  const { classes } = useStyles();
  const Icon = sorted ? (reversed ? ArrowDropUp : ArrowDropDown) : Rule;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

const  filterData = (data: RowData[], search: string) => {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

const Employees = () => {
  return (
    <div>Employees</div>
  )
}

export default Employees