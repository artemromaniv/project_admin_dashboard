
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

const sortData = (
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) => {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const Employees = ({ data }: TableSortProps) => {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };


  //lines below causing errors,needs to be fixed
  const rows = sortedData.map((row) => (
    <tr key={row.employee}>
      <td>{row.employee}</td>
      <td>{row.email}</td>
      <td>{row.status}</td>
      <td>{row.position}</td>
      <td>{row.salary}</td>
    </tr>
  ));

  return (
    <ScrollArea>
    <TextInput
      placeholder="Search by any field"
      mb="md"
      icon={<Search />}
      value={search}
      onChange={handleSearchChange}
    />
    <Table
      horizontalSpacing="md"
      verticalSpacing="xs"
      sx={{ tableLayout: 'fixed', minWidth: 700 }}
    >
      <thead>
        <tr>
          <TableHeader
            sorted={sortBy === 'employee'}
            reversed={reverseSortDirection}
            onSort={() => setSorting('employee')}
          >
            Name
          </TableHeader>
          <TableHeader
            sorted={sortBy === 'email'}
            reversed={reverseSortDirection}
            onSort={() => setSorting('email')}
          >
            Email
          </TableHeader>
          <TableHeader
            sorted={sortBy === 'status'}
            reversed={reverseSortDirection}
            onSort={() => setSorting('status')}
          >
            Status
          </TableHeader>
          <TableHeader
            sorted={sortBy === 'position'}
            reversed={reverseSortDirection}
            onSort={() => setSorting('position')}
          >
            Position
          </TableHeader>
          <TableHeader
            sorted={sortBy === 'salary'}
            reversed={reverseSortDirection}
            onSort={() => setSorting('salary')}
          >
            Salary
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows
        ) : (
          <tr>
            <td colSpan={Object.keys(data[0]).length}>
              <Text weight={500} align="center">
                Nothing found
              </Text>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </ScrollArea>
  )
}

export default Employees