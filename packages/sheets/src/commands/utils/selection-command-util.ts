/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { IAccessor } from '@univerjs/core';
import { IContextService } from '@univerjs/core';
import { IRefSelectionsService } from '../../services/selections/ref-selections.service';
import { DISABLE_NORMAL_SELECTIONS, SheetsSelectionsService } from '../../services/selections/selection.service';

export function getSelectionsService(
    accessor: IAccessor
): SheetsSelectionsService {
    const contextService = accessor.get(IContextService);
    const disabledNormalSelections = contextService.getContextValue(DISABLE_NORMAL_SELECTIONS);

    return accessor.get(disabledNormalSelections ? IRefSelectionsService : SheetsSelectionsService);
}
