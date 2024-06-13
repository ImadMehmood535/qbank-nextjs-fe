import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import Tableactionsicons from "./Tableactionsicons";
import { Button } from "@nextui-org/react";
import NoContentAvailable from "./NoContentAvailable";

const Tableform = ({
  tableheading,
  itemPerPage,
  filterdata,
  tablecolumns,
  searchFilter,
  resultPreview,
  deletePreview,
  handleDelete,
  invoicePreview,
  noContentText,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchFilter, itemPerPage]);

  const filterdataArray = Array.isArray(filterdata) ? filterdata : [filterdata];

  const filteredData =
    searchFilter && searchFilter.trim() !== ""
      ? filterdataArray.filter((item) =>
          item?.name?.toLowerCase().includes(searchFilter.toLowerCase())
        )
      : filterdataArray;

  const pages = Math.ceil(filteredData.length / itemPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const start = (page - 1) * itemPerPage;
  const end = start + itemPerPage;
  const items = filteredData.slice(start, end);

  let count = start + 1;
  return (
    <div className="Tableform   rounded-xl py-6 px-1 md:px-4 ">
      {tableheading && (
        <>
          <h2 className="text-xl font-medium capitalize text-black mb-4">
            {tableheading}
          </h2>
          {/* <hr className="border-b-1 rounded-none border-[#F5F5F5]" /> */}
        </>
      )}
      {filterdata?.length > 0 ? (
        <div className="mt-4">
          <Table
            aria-label="Example table with client async pagination"
            bottomContent={
              <div className="flex w-full justify-center">
                {pages > 1 && (
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="danger"
                    page={page}
                    total={pages}
                    onChange={handlePageChange}
                  />
                )}
              </div>
            }
          >
            <TableHeader>
              {tablecolumns?.map((tablecol) => (
                <TableColumn key={tablecol.key}>{tablecol.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody items={items}>
              {items?.map((item, rowIndex) => (
                <TableRow key={rowIndex}>
                  {tablecolumns?.map((datacolumn) => (
                    <TableCell
                      key={datacolumn?.key}
                      className="font-normal text-sm"
                    >
                      {datacolumn?.key === "num" ? count++ : null}
                      {datacolumn?.key !== "actions" ? (
                        datacolumn?.key === "isLive" ||
                        datacolumn?.key === "isTrial" ||
                        datacolumn?.key === "subscription" ? (
                          item[datacolumn?.key] ? (
                            <Button
                              variant="bordered"
                              isDisabled
                              className="bg-transparent text-[#3FD639] border-[#3FD639] !opacity-100"
                            >
                              Active
                            </Button>
                          ) : (
                            <Button
                              variant="bordered"
                              isDisabled
                              className="bg-transparent text-[#FF3A3A] border-[#FF3A3A] !opacity-100"
                            >
                              Inactive
                            </Button>
                          )
                        ) : datacolumn?.key === "isBlocked" ? (
                          item[datacolumn?.key] ? (
                            <Button
                              variant="bordered"
                              isDisabled
                              className="bg-transparent text-[#FF3A3A] border-[#FF3A3A] !opacity-100"
                            >
                              Inactive
                            </Button>
                          ) : (
                            <Button
                              variant="bordered"
                              isDisabled
                              className="bg-transparent text-[#3FD639] border-[#3FD639] !opacity-100"
                            >
                              Active
                            </Button>
                          )
                        ) : (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item[datacolumn?.key],
                            }}
                          />
                        )
                      ) : (
                        <Tableactionsicons
                          id={item?.id}
                          result={item?.resultId}
                          subscriptionId={item?.subscriptionId}
                          resultPreview={resultPreview}
                          deletePreview={deletePreview}
                          handleDelete={handleDelete}
                          invoicePreview={invoicePreview}
                        />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <NoContentAvailable noContentText={noContentText} />
      )}
    </div>
  );
};

export default Tableform;
