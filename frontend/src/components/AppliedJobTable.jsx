import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div>
      {allAppliedJobs.length <= 0 ? (
        <div className="flex items-center mt-20 justify-center">
          <span className="text-3xl text-gray-500 font-bold ">You have not applied in any Job</span>
        </div>
      ) : (
        <Table>
          <TableCaption className="mt-10 border-t border-gray-600">A list of your applied jobs</TableCaption>
          <TableHeader className="border-b">
            <TableRow className="border-b hover:bg-gray-900">
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAppliedJobs.map((appliedJob) => (
              <TableRow className="hover:bg-gray-600" key={appliedJob._id}>
                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job?.title}</TableCell>
                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400 hover:bg-red-500"
                        : appliedJob.status === "pending"
                        ? "bg-gray-700"
                        : "bg-green-400 hover:bg-green-500"
                    } cursor-pointer`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AppliedJobTable;
