import { useEffect } from "react";
import { useState } from "react";
import { getBlockchainContext } from "../../context/BlockchainContext";
import Loading from "../loading/Loading";
import OwnerStats from "./OwnerStats";
import { Link } from "react-router-dom";

function Admin() {
  const { isOwner } = getBlockchainContext();

  return (
    <>
      {isOwner === undefined ? (
        <Loading />
      ) : isOwner ? (
        <OwnerStats />
      ) : (
        <div class="not-authorized">
          <div class="centered-content">
            <p>Not authorized</p>
            <Link
              to="/dashboard"
              class="button bg-teal-600 m-5 text-sm p-1 rounded-md text-white"
            >
              Go back
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Admin;
