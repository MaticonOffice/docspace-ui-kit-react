/*
 * Copyright (C) Ascensio System SIA, 2009-2026
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation, together with the
 * additional terms provided in the LICENSE file.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For
 * details, see the GNU AGPL at: https://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Maticon Office LLC by email at info@maticonoffice.ru
 * or by postal mail at Office 1840, Premises 4/45, 12 Presnenskaya Embankment, Moscow, 123112, Russia,
 * Office 1840, Premises 4/45, 12 Presnenskaya Embankment, Moscow, 123112, Russia.
 *
 * The interactive user interfaces in modified versions of the Program
 * are required to display Appropriate Legal Notices in accordance with
 * Section 5 of the GNU AGPL version 3.
 *
 * No trademark rights are granted under this License.
 *
 * All non-code elements of the Product, including illustrations,
 * icon sets, and technical writing content, are licensed under the
 * Creative Commons Attribution-ShareAlike 4.0 International License:
 * https://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 * This license applies only to such non-code elements and does not
 * modify or replace the licensing terms applicable to the Program's
 * source code, which remains licensed under the GNU Affero General
 * Public License v3.
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import React from "react";
import { ReactSVG } from "react-svg";

import { Text } from "../../text";
import { Tooltip } from "../../tooltip";
import { TBadgesProps } from "../Navigation.types";

const Badges = ({
  titleIcon,
  isRootFolder,
  titleIconTooltip,
}: TBadgesProps) => {
  const getContent = () => (
    <Text fontSize="12px" fontWeight={400} noSelect>
      {titleIconTooltip}
    </Text>
  );

  return (
    <>
      {titleIcon && !isRootFolder ? (
        <ReactSVG
          style={{ height: 16 }}
          data-tooltip-id="iconTooltip"
          className="title-icon"
          src={titleIcon}
        />
      ) : null}

      {titleIconTooltip ? (
        <Tooltip
          id="iconTooltip"
          place="bottom"
          getContent={getContent}
          maxWidth="300px"
        />
      ) : null}
    </>
  );
};

export default React.memo(Badges);
