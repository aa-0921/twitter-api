import Head from "next/head";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
export default function testtest() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>hoghoge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Link href="/">
          <a className="text-red-500">home</a>
        </Link>
        <div>hoghoge</div>
      </main>
    </div>
  );
}
